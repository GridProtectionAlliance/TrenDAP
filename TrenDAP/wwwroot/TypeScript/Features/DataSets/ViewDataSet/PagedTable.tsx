//******************************************************************************************************
//  PagedTable.tsx - Gbtc
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
//  02/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { TrenDAP } from '../../../global';
import Table from '@gpa-gemstone/react-table';
import { Pencil, Flag } from '@gpa-gemstone/gpa-symbols';


export default function PagedTable(props: { Data: TrenDAP.iXDATrendDataPoint[], Selected: TrenDAP.iXDATrendDataPoint,SetFlag: (record: TrenDAP.iXDATrendDataPoint ) => void}) {
    const [sortField, setSortField] = React.useState<keyof TrenDAP.iXDATrendDataPoint>('Timestamp');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [page, setPage] = React.useState<number>(0);
    const [tableData, setTableData] = React.useState<TrenDAP.iXDATrendDataPoint[]>([]);
    const [maxPages, setMaxPages] = React.useState<number>(50);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [record, setRecord] = React.useState<TrenDAP.iXDATrendDataPoint>(null);

    const tableHeight = window.innerHeight - 270; // 50 + 100 + 70 + 50
    const maxRowCount = Math.floor(tableHeight / 65);

    React.useEffect(() => {
        const data = [...props.Data];
        data.sort((a, b) => {
            if (a[sortField] > b[sortField]) return (ascending ? 1 : -1);
            else if (a[sortField] === b[sortField]) return 0;
            else return (ascending ? -1 : 1);
        });
        setTableData(data.slice(page * maxRowCount, (page + 1) * maxRowCount));
        setMaxPages(Math.ceil(data.length / maxRowCount) - 1);
    }, [props.Data, ascending, sortField]);


    React.useEffect(() => {
        setTableData(props.Data.slice(page * maxRowCount, (page + 1) * maxRowCount));
    }, [page]);

    React.useEffect(() => {
        const index = props.Data.findIndex(d => d.Timestamp === props.Selected?.Timestamp);
        if (index >= 0) {
            let newPage = Math.floor(index / maxRowCount);
            setPage(newPage);
        }
    }, [props.Selected]);

    return (
        <>
            <Table<TrenDAP.iXDATrendDataPoint> tableClass='table'
                cols={[
                    { key: 'Timestamp', field: 'Timestamp', label: 'Timestamp' },
                    { key: 'Minimum', field: 'Minimum', label: 'Min', content: (item, key, style) => (item?.Minimum.toString() === 'NaN' ? 'NaN' : item.Minimum.toFixed(2))},
                    { key: 'Average', field: 'Average', label: 'Avg', content: (item, key, style) => (item?.Average.toString() === 'NaN' ? 'NaN' : item.Average.toFixed(2))},
                    { key: 'Maximum', field: 'Maximum', label: 'Max', content: (item, key, style) => (item?.Maximum.toString() === 'NaN' ? 'NaN' : item.Maximum.toFixed(2))},
                    { key: 'QualityFlags', field: 'QualityFlags', label: 'Flagged', content: (item, key, style) => item.QualityFlags > 0 ? Flag : ''},
                    {
                        key: null, label: '', content: (item) => <button className='btn btn-link' onClick={() => { setRecord(item); setToggle(true); } }>{Pencil}</button>}
                ]}
                selected={record => record.Timestamp === props.Selected?.Timestamp }
                data={tableData}
                sortKey={sortField}
                onClick={(data) => { }}
                ascending={ascending}
                onSort={(data) => {
                    if (data.colField === sortField)
                        setAscending(!ascending)
                    else {
                        setSortField(data.colField)
                        setAscending(true)
                    }
                }} />
            <div className='pull-right'>
                <button className='btn btn-link' title='Move back 10 pages' onClick={() => setPage((page >= 10 ? page - 10 : 0))} disabled={page <= 0}>{'<<'}</button>
                <button className='btn btn-link' title='Move back 1 page' onClick={() => setPage((page >= 1 ? page - 1 : 0))} disabled={page <= 0}>{'<'}</button>
                <span>Page&nbsp;</span>
                <input value={page + 1} type='number' onChange={(evt) => setPage(parseInt(evt.target.value) - 1)} style={{width: 40}} />
                <span>of&nbsp;{ maxPages + 1}</span>
                <button className='btn btn-link' title='Move forward 1 page' onClick={() => setPage((page <= maxPages ? page + 1 : maxPages))} disabled={page >= maxPages}>{'>'}</button>
                <button className='btn btn-link' title='Move forward 10 pages' onClick={() => setPage((page <= maxPages - 10 ? page + 10 : maxPages))} disabled={page >= maxPages}>{'>>'}</button>

            </div>
            <div className="modal" role="dialog" style={{ display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content mx-auto">
                        <div className="modal-header">
                            <h5 className="modal-title">Mark As Flagged</h5>
                            <button type="button" className={"close"} onClick={() => setToggle(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <ul style={{listStyle: 'none'}}>
                                    <li>Time: {record?.Timestamp}</li>
                                    <li>Max: {record?.Maximum}</li>
                                    <li>Avg: {record?.Average}</li>
                                    <li>Min: {record?.Minimum}</li>
                                    <li>Flag: <input type='checkbox' checked={(record?.QualityFlags / Math.pow(2, 4) & 1) !== 0} onChange={(evt) => setRecord({ ...record, QualityFlags: evt.target.checked ? record.QualityFlags + Math.pow(2, 4) : record.QualityFlags - Math.pow(2, 4)}) }/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                props.SetFlag(record);
                                setToggle(false);
                            }}>Save</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setToggle(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}