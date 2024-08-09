//******************************************************************************************************
//  SOE.tsx - Gbtc
//
//  Copyright � 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  08/06/2024 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import * as $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import { Input } from '@gpa-gemstone/react-forms';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { EventSourceTypes, IEventSource, EnsureTypeSafety } from '../Interface';
import { TrenDAP } from '../../../global';

const soeDateTimeFormat = "YYYY-MM-DD HH:mm:ss.SSS";

interface ISOEInfo {
    AlarmDateTime: string, 
    StationName: string, 
    AlarmPoint: string,
    AlarmStatus: string 
}

interface IDataSourceSettings {
    ConnectionString: string,
    DataProviderString: string
}

interface IDatasetSetting {
    FilterOut: string[]
}

const SOE: IEventSource<IDataSourceSettings, IDatasetSetting> = {
    Name: 'SOE DB',
    DefaultSourceSettings: {
        ConnectionString: "",
        DataProviderString: ""
    },
    DefaultDataSetSettings: {
        FilterOut: ['abnormal', 'close', 'no', 'normal', 'received', 'start', 'trip', 'yes']
    },
    ConfigUI: (props: TrenDAP.ISourceConfig<IDataSourceSettings>) => {
        return (
            <>
                <Input Record={props.Settings} Setter={props.SetSettings} Field='ConnectionString' Label='Connection String' Valid={() => true} />
                <Input Record={props.Settings} Setter={props.SetSettings} Field='DataProviderString' Label='Data Provider String' Valid={() => true}  />
            </>
        );
    },
    DataSetUI: (props: EventSourceTypes.IEventSourceDataSetProps<null, IDatasetSetting>) => {
        const valueList = React.useMemo(() => {

        }, [props.Settings.FilterOut]);

        const setFilter = (val: IValue) => {
            const u = _.cloneDeep(props.Settings.FilterOut);
            u[val.Index] = val.Value;
            props.SetSettings({ FilterOut: u });
        }

        const deleteFilter = (val: IValue) => {
            const u = _.cloneDeep(props.Settings.FilterOut);
            u.splice(val.Index, 1);
            props.SetSettings({ FilterOut: u });
        }

        return (
            <>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info" onClick={() => {
                            const u = _.cloneDeep(props.Settings.FilterOut);
                            u.push('');
                            props.SetSettings({ FilterOut: u });
                        } }>Add Exclusion Filter</button>
                    </div>
                </div>
                <br/>
                <div className="row" style={{ flex: 1, overflow: 'auto' }}>
                    <div className="col">
                        {props.Settings.FilterOut.map((item, i) =>
                            (i % 2 == 0) ? 
                                <ValueField key={`l_${i}`} Value={{Value: item, Index: i}} SetValue={setFilter} DeleteValue={deleteFilter} />
                                : null
                        )}
                    </div>
                    <div className="col">
                        {props.Settings.FilterOut.map((item, i) =>
                            (i % 2 == 1) ? 
                                <ValueField key={`r_${i}`} Value={{Value: item, Index: i}} SetValue={setFilter} DeleteValue={deleteFilter} />
                                : null
                        )}
                    </div>
                </div>
            </>);
    },
    Load: function (_eventSource: EventSourceTypes.IEventSourceView, _dataSet: TrenDAP.iDataSet, setConn: EventSourceTypes.IEventSourceDataSet): Promise<TrenDAP.IEvent[]> {
        return new Promise<TrenDAP.IEvent[]>((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `${homePath}api/SOE/Query/${setConn.ID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((data: ISOEInfo[]) => {
                // Parse events from response data
                resolve(data.map(evt => ({
                    Time: moment.utc(evt.AlarmDateTime, soeDateTimeFormat).valueOf(),
                    Duration: 0,
                    Title: `${evt.StationName} - ${evt.AlarmPoint}`,
                    Description: evt.AlarmStatus,
                })));
            }).fail(err => {
                console.log(err)
                reject(err)
            });
        });
    },
    TestAuth: function (eventSource: EventSourceTypes.IEventSourceView): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `${homePath}api/SOE/TestAuth/${eventSource.ID}`,
                contentType: "application/json; charset=utf-8",
                cache: true,
                async: true
            }).done((data: string) => {
                if (data === "1") resolve(true);
                else {
                    console.error(data);
                    resolve(false);
                }
            }).fail(() => {
                reject("Unable to resolve auth test.");
            });
        });
    }
}

interface IValueFieldProps {
    Value: IValue,
    SetValue: (val: IValue) => void,
    DeleteValue: (val: IValue) => void
}

interface IValue { Value: string, Index: number }

const ValueField = React.memo((props: IValueFieldProps) => {
    return (
        <div className="row">
            <div className="col-10">
                <Input<IValue>
                    Record={props.Value}
                    Field="Value"
                    Setter={props.SetValue}
                    Valid={() => true}
                    Label="" />
            </div>
            <div className="col-2">
                <button className="btn btn-small btn-danger" onClick={() => props.DeleteValue(props.Value)}>
                    <ReactIcons.TrashCan />
                </button>
            </div>
        </div>
    );
});

export default SOE;