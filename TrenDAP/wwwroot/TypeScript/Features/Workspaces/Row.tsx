//******************************************************************************************************
//  Row.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  03/12/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from './../../global';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ToolTip, Modal } from '@gpa-gemstone/react-interactive';
import { CreateWidget } from '../Widgets/WidgetWrapper';
import WidgetWrapper from '../Widgets/WidgetWrapper';
import { Input, CheckBox, InputWithButton } from '@gpa-gemstone/react-forms';
import { CreateGuid } from '@gpa-gemstone/helper-functions';
import { SelectEditMode } from '../../Store/GeneralSettingsSlice';
import { useAppSelector } from '../../hooks';
import { AllWidgets, isPercent } from '../Widgets/WidgetWrapper';
import { BtnDropdown } from '@gpa-gemstone/react-interactive';
import _, { set } from 'lodash';

const NavMargin = 85;
const NavWidth = 200;

type Hover = ('None' | 'Add' | 'Remove' | 'Settings')

interface ISettings {
    Label: string,
    Height: number,
    ShowHeader: boolean,
    Widgets: TrenDAP.IWidgetModel[]
}

export default function Row(props: TrenDAP.IRow) {
    const guid = React.useRef<string>(CreateGuid());
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [settings, setSettings] = React.useState<ISettings>({ Height: props.Height, Label: props.Label, ShowHeader: props.ShowHeader, Widgets: props.Widgets });
    const [hover, setHover] = React.useState<Hover>('None')
    const [rowHeaderHover, setRowHeaderHover] = React.useState<boolean>(false);
    const [headerOpacity, setHeaderOpacity] = React.useState<number>(1);
    const [containerWidth, setContainerWidth] = React.useState<number>(0);

    const editMode = useAppSelector(SelectEditMode);

    React.useLayoutEffect(() => {
        if (containerRef.current != null) {
            if (containerRef.current.offsetWidth != containerWidth)
                setContainerWidth(containerRef.current.offsetWidth)
        }
    })

    React.useEffect(() => {
        if (!props.ShowHeader && editMode)
            setHeaderOpacity(0.5)
        else setHeaderOpacity(1)
    }, [props.ShowHeader, editMode])

    function HandleAddObject(type) {
        let row: TrenDAP.IRow = { ...props, UpdateRow: undefined, RemoveRow: undefined };
        let totalWidth = row.Widgets.reduce((sum, widget) => sum + widget.Width, 0);
        let remainingWidth = 100 - totalWidth
        if (remainingWidth > 5)
            row.Widgets.push(CreateWidget(type, remainingWidth))
        else {
            row.Widgets.push(CreateWidget(type, 5))
            distributeWidgetWidth(row, row.Widgets.length - 1)
        }
        props.UpdateRow(row);
    }


    const distributeWidgetWidth = (row: TrenDAP.IRow, updatedWidgetIndex: number) => {
        let totalWidth = row.Widgets.reduce((sum, widget) => sum + widget.Width, 0);

        if (totalWidth <= 100) return;

        let excessWidth = totalWidth - 100;

        // Function to adjust widgets, looping from start index to just before the updated widget index
        const adjustWidgets = (startIndex: number) => {
            for (let i = startIndex; excessWidth > 0; i = (i + 1) % row.Widgets.length) {
                if (i === updatedWidgetIndex) break;

                const currentWidget = row.Widgets[i];
                if (currentWidget.Width > 5) {
                    let reduction = Math.min(currentWidget.Width - 5, excessWidth);
                    currentWidget.Width -= reduction;
                    excessWidth -= reduction;
                }
            }
        };

        // Start adjusting from the widget immediately to the right of the updated widget
        adjustWidgets((updatedWidgetIndex + 1) % row.Widgets.length);

        if (excessWidth > 0) {
            console.log("Unable to resolve excess width.");
        }
    }

    return (
        <>
            <div className="card" style={{ height: props.Height }} ref={containerRef}>
                {props.ShowHeader || editMode ?
                    <div className="card-header" style={{ opacity: headerOpacity }} onMouseEnter={() => setRowHeaderHover(true)} onMouseLeave={() => setRowHeaderHover(false)}>
                        <div className="row">
                            <div className="d-flex col-6 justify-content-start align-items-center" >{props.Label}</div>
                            <div className="d-flex col-6 justify-content-end align-items-center">
                                <div style={{ visibility: rowHeaderHover && editMode ? 'visible' : 'hidden', zIndex: 9999 }}>
                                    <div className="btn-group">
                                        <BtnDropdown Disabled={props.Widgets.length >= 15} Label={AllWidgets[0].Name} Options={AllWidgets.map(widget => ({ Label: widget.Name, Callback: () => HandleAddObject(widget.Name), Disabled: props.Widgets.length >= 15 }))}
                                            Callback={() => HandleAddObject(AllWidgets[0].Name)} ShowToolTip={true} TooltipContent={<p>Add Widget</p>} />
                                        <button className="btn" data-tooltip={"rm-row-btn" + guid.current} onMouseEnter={() => setHover('Remove')} onMouseLeave={() => setHover('None')} onClick={() => props.RemoveRow()}>
                                            <ReactIcons.Minus />
                                        </button>
                                        <button className="btn" data-tooltip={"row-settings-btn" + guid.current} onMouseEnter={() => setHover('Settings')} onMouseLeave={() => setHover('None')} onClick={() => setShowModal(true)}>
                                            <ReactIcons.Settings />
                                        </button>
                                    </div>
                                    <ToolTip Show={hover === 'Remove'} Position="left" Target={"rm-row-btn" + guid.current}>Remove Row</ToolTip>
                                    <ToolTip Show={hover === 'Settings'} Position="left" Target={"row-settings-btn" + guid.current}>Row Settings</ToolTip>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                <div className="card-body d-flex h-100" style={{ padding: 0, zIndex: 0 }}>
                    {props.Widgets.map((widget, index) => {
                        return <WidgetWrapper
                            AllChannels={props.AllChannels}
                            ChannelMap={props.ChannelMap}
                            ParentMap={props.ParentMap}
                            AddChannelToMap={props.AddChannelToMap}
                            UpdateWidget={(newRecord) => {
                                let row = { ...props };
                                let widget = { ...newRecord };
                                row.Widgets[index] = widget;
                                distributeWidgetWidth(row, index)
                                props.UpdateRow(row);
                            }}
                            RemoveWidget={() => {
                                let row = { ...props };
                                row.Widgets.splice(index, 1);
                                props.UpdateRow(row);
                            }}
                            Widget={widget}
                            Height={props.Height}
                            key={index + widget.Type + guid.current} />
                    }
                    )}
                </div>
            </div>
            <Modal
                ConfirmBtnClass="btn btn-success mr-auto"
                Show={showModal}
                ShowX={true}
                ConfirmText='Save'
                Title={`Row Settings`}
                CallBack={(conf, deleteBtn, tertiary) => {
                    if (conf)
                        props.UpdateRow({ ...props, ...settings });
                    if (deleteBtn && !conf && !tertiary) //we need to see if we want these changes to happen immediately or onSave(row up and row down)
                        props.MoveRowDown()
                    if (tertiary)
                        props.MoveRowUp()
                    setShowModal(false);
                }}
                CancelText={"Move Row Down"}
                CancelBtnClass={"btn btn-primary"}
                Size="lg"
                ShowTertiary={true}
                TertiaryText="Move Row Up"
                TertiaryBtnClass={"btn btn-primary"}
            >
                <Input<ISettings> Record={settings} Field={'Label'} Setter={(item) => setSettings(item)} Valid={() => true} />
                <InputWithButton<ISettings> Label="Height" Field="Height" Type="integer" Valid={() => true /*update this later*/} Record={settings} Setter={(item) => setSettings(item)}
                    BtnLabel="Full Height" OnBtnClick={() => setSettings({ ...settings, Height: window.innerHeight - NavMargin })} />
                <CheckBox<ISettings> Field='ShowHeader' Record={settings} Setter={item => setSettings(item)} Label="Show Row Header" />

                <label>Widget Width</label>
                <ul className='list-group'>
                    {props.Widgets.map((widget, i) =>
                        <li className='list-group-item' key={i}>
                            <div className="row">
                                <div className='col-4 d-flex align-items-center'>
                                    {widget?.Label == null || '' ? `Widget ${i + 1}` : widget.Label}
                                </div>
                                <div className='col-4 d-flex align-items-center justify-content-center'>
                                    <Input<TrenDAP.IWidgetModel> Record={widget} Label="Width (%)" Field="Width" Type="integer" Valid={(field) => isPercent(widget[field])} Setter={(item) => {
                                        let row = _.cloneDeep(props);
                                        row.Widgets[i].Width = item.Width;
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }} />
                                </div>
                                <div className='col-4 d-flex align-items-center justify-content-center'>
                                    <button className='btn btn-link' disabled={i <= 0} onClick={() => {
                                        //for arrow up and down I will need to think about how to visually show them moving but not make the changes they save..
                                        let row = { ...props };
                                        if (i <= 0) return;
                                        const newIndex = i - 1;
                                        const a = row.Widgets[newIndex];
                                        const b = row.Widgets[i];
                                        row.Widgets[newIndex] = b;
                                        row.Widgets[i] = a;
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }}><ReactIcons.ArrowDropUp /></button>
                                    <button className='btn btn-link' disabled={i >= props.Widgets.length - 1} onClick={() => {
                                        let row = { ...props };
                                        if (i >= row.Widgets.length - 1) return;
                                        const newIndex = i + 1;
                                        const a = row.Widgets[newIndex];
                                        const b = row.Widgets[i];
                                        row.Widgets[newIndex] = b;
                                        row.Widgets[i] = a;
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }}><ReactIcons.ArrowDropDown /></button>
                                    <button className='btn btn-link' onClick={() => {
                                        //this doesnt make too much sense the way I am odnig this 
                                        //revisit this after done w Histogram
                                        let row = _.cloneDeep(props);
                                        row.Widgets.splice(i, 1);
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                        props.UpdateRow(row);
                                    }}><ReactIcons.CrossMark Color='red' /></button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </Modal>
        </>
    );
}




