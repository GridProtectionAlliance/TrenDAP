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
import { TrenDAP, DataSetTypes } from './../../global';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { ToolTip, Modal, Warning } from '@gpa-gemstone/react-interactive';
import WidgetWrapper from '../Widgets/WidgetWrapper';
import { Input, CheckBox, InputWithButton } from '@gpa-gemstone/react-forms';
import { CreateGuid } from '@gpa-gemstone/helper-functions';
import { SelectEditMode } from '../../Store/GeneralSettingsSlice';
import { useAppSelector } from '../../hooks';
import { AllWidgets } from '../Widgets/WidgetWrapper';
import { BtnDropdown } from '@gpa-gemstone/react-interactive';
import _ from 'lodash';
import { CreateWidget, isPercent } from '../Widgets/HelperFunctions';


type Hover = ('None' | 'Add' | 'Remove' | 'Settings')

interface IProps {
    AllChannels: DataSetTypes.IDataSetMetaData[],
    ChannelMap: TrenDAP.IChannelMap,
    SetChannelMapVersion: (version: number) => void
    ParentMap: React.MutableRefObject<Map<string, number>>,
    Label: string,
    Height: number,
    Widgets: TrenDAP.IWidgetModel[],
    ShowHeader: boolean,
    UpdateRow: (row: TrenDAP.IRowModel) => void,
    RemoveRow: () => void,
    MoveRowUp: () => void,
    MoveRowDown: () => void,
}


const Row: React.FunctionComponent<IProps> = (props) => {
    const editMode = useAppSelector(SelectEditMode);

    const guid = React.useRef<string>(CreateGuid());
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [settings, setSettings] = React.useState<TrenDAP.IRowModel>({ Height: props.Height, Label: props.Label, ShowHeader: props.ShowHeader, Widgets: props.Widgets });
    const [hover, setHover] = React.useState<Hover>('None');
    const [rowHeaderHover, setRowHeaderHover] = React.useState<boolean>(false);
    const [headerOpacity, setHeaderOpacity] = React.useState<number>(1);
    const [showWarning, setShowWarning] = React.useState<boolean>(false);

    React.useEffect(() => {
        setSettings({ Height: props.Height, Label: props.Label, ShowHeader: props.ShowHeader, Widgets: props.Widgets })
    }, [props])

    React.useEffect(() => {
        if (!props.ShowHeader && editMode)
            setHeaderOpacity(0.5)
        else setHeaderOpacity(1)
    }, [props.ShowHeader, editMode])

    const HandleAddObject = (type) => {
        let row: IProps = { ...props, UpdateRow: undefined, RemoveRow: undefined };
        let totalWidth = row.Widgets.reduce((sum, widget) => sum + widget.Width, 0);
        let remainingWidth = 100 - totalWidth;

        if (remainingWidth > 5)
            row.Widgets.push(CreateWidget(type, remainingWidth));
        else {
            row.Widgets.push(CreateWidget(type, 5));
            row = distributeWidgetWidth(row, row.Widgets.length - 1);
        }

        props.UpdateRow({ Height: row.Height, Widgets: row.Widgets, Label: row.Label, ShowHeader: row.ShowHeader });
    }

    const distributeWidgetWidth = (row: IProps, addedWidgetIndex: number): IProps => {
        let updatedRow = { ...row }
        let totalWidth = updatedRow.Widgets.reduce((sum, widget) => sum + widget.Width, 0);
        if (totalWidth <= 100) return updatedRow;

        let excessWidth = totalWidth - 100;

        // Function to adjust widgets, looping from start index to just before the updated widget index
        const adjustWidgets = (startIndex: number) => {
            for (let i = startIndex; excessWidth > 0; i = (i + 1) % updatedRow.Widgets.length) {
                if (i === addedWidgetIndex) break;

                const currentWidget = updatedRow.Widgets[i];
                if (currentWidget.Width > 5) {
                    let reduction = Math.min(currentWidget.Width - 5, excessWidth);
                    currentWidget.Width -= reduction;
                    excessWidth -= reduction;
                }
            }
        };

        // Start adjusting from the widget immediately to the right of the updated widget
        adjustWidgets((addedWidgetIndex + 1) % updatedRow.Widgets.length);

        if (excessWidth > 0) {
            console.log("Unable to resolve excess width.");
        }

        return updatedRow;
    };

    return (
        <>
            <div className="card" style={{ height: `${props.Height}%`}} ref={containerRef}>
                {props.ShowHeader || editMode ?
                    <div className="card-header" style={{ opacity: headerOpacity, zIndex: 9985 }} onMouseEnter={() => setRowHeaderHover(true)} onMouseLeave={() => setRowHeaderHover(false)}>
                        <div className="row">
                            <div className="d-flex col-6 justify-content-start align-items-center" >{props.Label}</div>
                            <div className="d-flex col-6 justify-content-end align-items-center">
                                <div style={{ visibility: rowHeaderHover && editMode ? 'visible' : 'hidden' }}>
                                    <div className="btn-group">
                                        <BtnDropdown Disabled={props.Widgets.length >= 15} Label={AllWidgets[0].Name} Options={AllWidgets.map(widget => ({ Label: widget.Name, Callback: () => HandleAddObject(widget.Name), Disabled: props.Widgets.length >= 15 }))}
                                            Callback={() => HandleAddObject(AllWidgets[0].Name)} ShowToolTip={true} TooltipContent={<p>Add Widget</p>} TooltipLocation="bottom" />
                                        <button className="btn" data-tooltip={"rm-row-btn" + guid.current} onMouseEnter={() => setHover('Remove')} onMouseLeave={() => setHover('None')} onClick={() => props.RemoveRow()}>
                                            <ReactIcons.Minus />
                                        </button>
                                        <button className="btn" data-tooltip={"row-settings-btn" + guid.current} onMouseEnter={() => setHover('Settings')} onMouseLeave={() => setHover('None')} onClick={() => setShowModal(true)}>
                                            <ReactIcons.Settings />
                                        </button>
                                    </div>
                                    <ToolTip Show={hover === 'Remove'} Position="bottom" Target={"rm-row-btn" + guid.current} Zindex={9986}>Remove Row</ToolTip>
                                    <ToolTip Show={hover === 'Settings'} Position="bottom" Target={"row-settings-btn" + guid.current} Zindex={9986}>Row Settings</ToolTip>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                <div className="card-body d-flex h-100" style={{ padding: 0, zIndex: 0, overflowY: 'hidden' }}>
                    {props.Widgets.map((widget, index) => {
                        return <WidgetWrapper
                            AllChannels={props.AllChannels}
                            ChannelMap={props.ChannelMap}
                            ParentMap={props.ParentMap}
                            UpdateWidget={(newRecord) => {
                                let row = { ...props };
                                let widget = { ...newRecord };
                                row.Widgets[index] = widget;
                                distributeWidgetWidth(row, index)
                                props.UpdateRow({ Height: row.Height, Widgets: row.Widgets, Label: row.Label, ShowHeader: row.ShowHeader });
                            }}
                            RemoveWidget={() => {
                                let row = { ...props };
                                row.Widgets.splice(index, 1);
                                props.UpdateRow({ Height: row.Height, Widgets: row.Widgets, Label: row.Label, ShowHeader: row.ShowHeader });
                            }}
                            Widget={widget}
                            SetChannelMapVersion={props.SetChannelMapVersion}
                            key={index + widget.Type + guid.current} />
                    }
                    )}
                </div>
            </div>
            <Modal
                Show={showModal}
                ShowX={true}
                ShowTertiary={true}
                Size="lg"
                CallBack={(conf, deleteBtn, tertiary) => {
                    if (settings.Widgets.length < props.Widgets.length) {
                        setShowWarning(true);
                        return
                    }
                    else if (conf)
                        props.UpdateRow({ ...props, ...settings });
                    else if (deleteBtn && !conf && !tertiary)
                        props.MoveRowDown()
                    else if (tertiary)
                        props.MoveRowUp()
                    setShowModal(false);
                }}
                Title={`Row Settings`}
                CancelText={"Move Row Down"}
                TertiaryText="Move Row Up"
                ConfirmText='Save'
                ConfirmBtnClass="btn btn-success mr-auto"
                CancelBtnClass={"btn btn-primary"}
                TertiaryBtnClass={"btn btn-primary"}
            >
                <Input<TrenDAP.IRowModel> Record={settings} Field={'Label'} Setter={(item) => setSettings(item)} Valid={() => true} />
                <Input<TrenDAP.IRowModel> Label="Height (%)" Field='Height' Record={settings} Type='integer' Setter={(item) => setSettings(item)}
                    Valid={(item) => isPercent(settings[item] as number)} Feedback='Height must be a valid percent and greater than 5' />
                <CheckBox<TrenDAP.IRowModel> Field='ShowHeader' Record={settings} Setter={item => setSettings(item)} Label="Show Row Header" />
                <label>Widget Width</label>
                <ul className='list-group'>
                    {settings.Widgets.map((widget, i) =>
                        <li className='list-group-item' key={i}>
                            <div className="row">
                                <div className='col-4 d-flex align-items-center'>
                                    {widget?.Label == null || '' ? `Widget ${i + 1}` : widget.Label}
                                </div>
                                <div className='col-4 d-flex align-items-center justify-content-center'>
                                    <Input<TrenDAP.IWidgetModel> Record={widget} Label="Width (%)" Field="Width" Type="integer" Valid={(field) => isPercent(widget[field])} Setter={(item) => {
                                        let row = _.cloneDeep(settings);
                                        row.Widgets[i].Width = item.Width;
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }} />
                                </div>
                                <div className='col-4 d-flex align-items-center justify-content-center'>
                                    <button className='btn btn-link' disabled={i <= 0} onClick={() => {
                                        //for arrow up and down I will need to think about how to visually show them moving but not make the changes they save..
                                        let row = _.cloneDeep(settings);
                                        if (i <= 0) return;
                                        const newIndex = i - 1;
                                        const a = row.Widgets[newIndex];
                                        const b = row.Widgets[i];
                                        row.Widgets[newIndex] = b;
                                        row.Widgets[i] = a;
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }}><ReactIcons.ArrowDropUp /></button>
                                    <button className='btn btn-link' disabled={i >= props.Widgets.length - 1} onClick={() => {
                                        let row = _.cloneDeep(settings);
                                        if (i >= row.Widgets.length - 1) return;
                                        const newIndex = i + 1;
                                        const a = row.Widgets[newIndex];
                                        const b = row.Widgets[i];
                                        row.Widgets[newIndex] = b;
                                        row.Widgets[i] = a;
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }}><ReactIcons.ArrowDropDown /></button>
                                    <button className='btn btn-link' onClick={() => {
                                        let row = _.cloneDeep(settings);
                                        row.Widgets.splice(i, 1);
                                        setSettings({ ...settings, Widgets: row.Widgets })
                                    }}><ReactIcons.TrashCan Color='red' /></button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </Modal>
            <Warning Show={showWarning} Title={"Delete Widget"} Message={"You deleted a widget are you sure you want to proceed?"} CallBack={(confirmed) => {
                if (confirmed) {
                    props.UpdateRow(settings);
                    setShowModal(false);
                }
                setShowWarning(false);
            }} />
        </>
    );
}

export default Row;