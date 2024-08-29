// ******************************************************************************************************
//  StandardSelectPopup.tsx - Gbtc
//
//  Copyright © 2024, Grid Protection Alliance.  All Rights Reserved.
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
//  08/08/2024 - G. Santos
//       Generated original version of source code.
// ******************************************************************************************************

import Table, { Column } from "@gpa-gemstone/react-table";
import * as React from 'react';
import _ from 'lodash';
import { Modal, Search, SearchBar } from "@gpa-gemstone/react-interactive";
import { CrossMark } from "@gpa-gemstone/gpa-symbols";
import { SearchOpenXDA, SelectSearchOpenXDA, SelectSearchOpenXDAStatus, SelectSearchOpenXDAAscending, SelectSearchOpenXDAFilters, SelectSearchOpenXDASortField } from "./OpenXDASlice";
import { TrenDAP, Redux } from '../../global';
import { useAppDispatch, useAppSelector } from "../../hooks";

interface U { ID: number }

interface IProps<T extends U> {
    Table: string,
    SourceID: number,
    SourceType: 'event' | 'data',
    Selection: T[],
    OnClose: (selected: T[], conf: boolean) => void
    Show: boolean,
    Type: 'single' | 'multiple',
    TableColumns: Column<T>[],
    SearchColumns: Search.IField<T>[],
    DefaultSearchCol: Search.IField<T>,
    Title: string,
    MinSelection?: number,
    children?: React.ReactNode
}

export default function SelectPopup<T extends U>(props: IProps<T>) {
    const dispatch = useAppDispatch();
    const status: TrenDAP.Status = useAppSelector((state: Redux.StoreState) => SelectSearchOpenXDAStatus(state, props.SourceID, props.Table,  props.SourceType));
    const sortField = useAppSelector((state: Redux.StoreState) => SelectSearchOpenXDASortField(state, props.SourceID, props.Table,  props.SourceType));
    const ascending = useAppSelector((state: Redux.StoreState) => SelectSearchOpenXDAAscending(state, props.SourceID, props.Table,  props.SourceType));
    const filters = useAppSelector((state: Redux.StoreState) => SelectSearchOpenXDAFilters(state, props.SourceID, props.Table,  props.SourceType));
    const data: T[] = useAppSelector((state: Redux.StoreState) => SelectSearchOpenXDA(state, props.SourceID, props.Table,  props.SourceType));

    const [selectedData, setSelectedData] = React.useState<T[]>(props.Selection);

    const [sortKeySelected, setSortKeySelected] = React.useState<string>('');
    const [ascendingSelected, setAscendingSelected] = React.useState<boolean>(false);

    React.useEffect(() => {
        setSelectedData(props.Selection);
    }, [props.Selection]);

    React.useEffect(() => {
        if (status === 'unitiated' || status === 'changed')
            dispatch(SearchOpenXDA({
                dataSourceID: props.SourceID, 
                sourceType: props.SourceType, 
                table: props.Table,
                filters: filters,
                sortField: sortField,
                ascending: ascending
            }));
    }, [status]);

    function AddCurrentList() {
        let updatedData: any[];
        updatedData = (selectedData as any[]).concat(data);
        setSelectedData(_.uniqBy((updatedData as T[]), (d) => d.ID));
    }

    return (<>
        <Modal Show={props.Show} Title={props.Title} ShowX={true} Size={'xlg'} CallBack={(conf) => props.OnClose(selectedData, conf)} 
        DisableConfirm={props.MinSelection !== undefined && selectedData.length < props.MinSelection} 
        ConfirmShowToolTip={props.MinSelection !== undefined && selectedData.length < props.MinSelection}
        ConfirmToolTipContent={<p>{CrossMark} At least {props.MinSelection} items must be selected. </p>}
        >
            <div className="row">
                <div className="col">
                    <SearchBar<T>
                        CollumnList={props.SearchColumns}
                        SetFilter={(flds) => dispatch(
                            SearchOpenXDA({
                                dataSourceID: props.SourceID, 
                                sourceType: props.SourceType, 
                                table: props.Table,
                                filters: flds,
                                sortField: sortField,
                                ascending: ascending
                        }))} 
                        Direction={'left'}
                        defaultCollumn={props.DefaultSearchCol}
                        Width={'50%'}
                        Label={'Search'}
                        ShowLoading={status === 'loading'}
                        ResultNote={status === 'error' ? 'Could not complete Search' : 'Found ' + data.length + ' Result(s)'}
                    >
                        {props.Type === 'multiple'? <li className="nav-item" style={{ width: '20%', paddingRight: 10 }}>
                                <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                    <legend className="w-auto" style={{ fontSize: 'large' }}>Quick Selects:</legend>
                                    <form>
                                        <div className="form-group">
                                            <div className="btn btn-primary" onClick={(event) => { event.preventDefault(); AddCurrentList(); }}>Add Current List to Selection</div>
                                        </div>
                                        <div className="form-group">
                                            <div className="btn btn-danger" onClick={(event) => { event.preventDefault(); setSelectedData([]) }}>Remove All</div>
                                        </div>
                                    </form>
                                </fieldset>
                            </li>: null}
                        {React.Children.map(props.children, (e) => {
                            if (React.isValidElement(e)) return e;
                            return null;
                        })}
                    </SearchBar>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{ width: (props.Type === undefined || props.Type === 'single' ? '100%' : '60%') } }>
                    <Table<T>
                        cols={props.TableColumns}
                        tableClass="table table-hover"
                        data={data}
                        sortKey={sortField as string}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.colKey === "Scroll")
                                return;

                            if (d.colKey === sortField)
                                dispatch(SearchOpenXDA({
                                    dataSourceID: props.SourceID, 
                                    sourceType: props.SourceType, 
                                    table: props.Table,
                                    filters: filters,
                                    sortField: sortField,
                                    ascending: !ascending
                                }));
                            else {
                                dispatch(SearchOpenXDA({
                                    dataSourceID: props.SourceID, 
                                    sourceType: props.SourceType, 
                                    table: props.Table,
                                    filters: filters,
                                    sortField: d.colKey,
                                    ascending: ascending
                                }));
                            }
                        }}
                        onClick={(d) => {
                            if (props.Type === undefined || props.Type === 'single')
                                setSelectedData([d.row])
                            else
                                setSelectedData((s) => [...s.filter(item => item.ID !== d.row.ID), d.row])
                        }}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: '400px', width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={(item) => selectedData.findIndex(d => d.ID === item.ID) > -1 }
                    />
                </div>
                {props.Type === 'multiple' ? <div className="col" style={{ width: '40%' }}>
                    <div style={{ width: '100%' }}>
                        <h3> Current Selection </h3>
                    </div>
                    <Table
                        cols={props.TableColumns}
                        tableClass="table table-hover"
                        data={selectedData}
                        sortKey={sortKeySelected}
                        ascending={ascendingSelected}
                        onSort={(d) => {
                            if (d.colKey === sortKeySelected) {
                                const ordered = _.orderBy<T[]>(selectedData, [d.colKey], [(!ascendingSelected ? "asc" : "desc")]) as any;
                                setAscendingSelected(!ascendingSelected);
                                setSelectedData(ordered);
                            }
                            else {
                                const ordered = _.orderBy(selectedData, [d.colKey], ["asc"]) as any;
                                setAscendingSelected(!ascendingSelected);
                                setSelectedData(ordered);
                                setSortKeySelected(d.colKey);
                            }
                        }}
                        onClick={(d) => setSelectedData([...selectedData.filter(item => item.ID !== d.row.ID)])}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: '400px', width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={(item) => false}
                    />
                </div> : null}
            </div>
        </Modal>
        </>)

    }