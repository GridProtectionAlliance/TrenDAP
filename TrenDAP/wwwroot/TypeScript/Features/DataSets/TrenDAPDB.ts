//******************************************************************************************************
//  TrenDAPDB.ts - Gbtc
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
//  01/19/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { TrenDAP, DataSetTypes } from "../../global";
import { WidgetTypes } from "../Widgets/Interfaces";
import moment from "moment";
import HashTable from "../Workspaces/HashTable";
import _ from "lodash";

export interface ChannelTableRow {
    ID: string,
    Created: string,
    Data: DataSetTypes.IDataSetData
}
export interface EventTableRow {
    ID: number,
    Created?: string,
    Data: TrenDAP.IEvent[]
}

const TimeFormat = 'MM/DD/YYYY HH:mm:ss';
const AllowableVirtualTimeDelta = 60000;
type TrenDAPTable = 'Channel' | 'Event' | 'Virtual';
//To DO Add Documentation on what each function does...
export default class TrenDAPDB {

    private OpenDB() {

        return new Promise<IDBDatabase>((resolve, reject) => {
            const req = indexedDB.open('TrenDAP');

            req.onupgradeneeded = evt => this.AddTable(evt, 'Channel');

            req.onsuccess = (evt: any) => {
                let database = evt.target.result;
                const version = parseInt(database.version);
                database.close();
                let secondReq = indexedDB.open('TrenDAP', version + 1);
                secondReq.onupgradeneeded = secondEvt => this.AddTable(secondEvt, 'Event');
                secondReq.onsuccess = () => {
                    let thirdReq = indexedDB.open('TrenDAP', version + 2);
                    thirdReq.onupgradeneeded = thirdEvt => this.AddTable(thirdEvt, 'Virtual');
                    thirdReq.onsuccess = (thirdEvt: any) => {
                        resolve(thirdEvt.target.result as IDBDatabase);
                    };
                };
            }

            req.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            if (!('indexedDB' in window)) {
                reject('This browser doesn\'t support IndexedDB');
            }

        })

    }

    public ClearTable(table: TrenDAPTable) {
        return new Promise(async (resolve, reject) => {
    
            const db = await this.OpenDB();
            const tx = db.transaction(table, 'readwrite');
            const store = tx.objectStore(table);
            
            const request = store.clear();
            request.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };
            request.onerror = (evt: any) => {
                reject(evt.target.error);
            };
    
            tx.onerror = (evt: any) => {
                reject(evt.target.error);
            };
        });
    }

    private AddTable(evt: any, table: string) {
        const upgradeDB = evt.target.result as IDBDatabase;
        if (!upgradeDB.objectStoreNames.contains(table)) {
            const ds = upgradeDB.createObjectStore(table, { keyPath: 'ID', autoIncrement: false });
            ds.createIndex("ID", "ID", { unique: true });
        }
    }

    public ReadMany(channels: { ID: string, ChannelSettings: any, ChannelKey: TrenDAP.IChannelKey }[]) {
        return new Promise<{ Data: ChannelTableRow, ChannelSettings: any, ChannelKey: TrenDAP.IChannelKey }[]>(async (resolve, reject) => {
            if (channels == null || channels.length === 0) {
                resolve([]);
                return;
            }
    
            const db = await this.OpenDB();
            const tx = db.transaction('Channel', 'readonly');
            const store = tx.objectStore('Channel');
            const results: { Data: ChannelTableRow, ChannelSettings: any, ChannelKey: TrenDAP.IChannelKey }[] = [];
    
            let completed = 0;
            channels.forEach(channel => {
                if (channel.ID == null) return;
    
                const request = store.get(channel.ID);
                request.onsuccess = (evt: any) => {
                    results.push({ Data: evt.target.result, ChannelSettings: channel.ChannelSettings, ChannelKey: channel.ChannelKey });
                    completed++;
                    if (completed === channels.length) {
                        db.close();
                        resolve(results);
                    }
                };
                request.onerror = (evt: any) => {
                    reject(evt.target.error);
                };
            });
    
            tx.onerror = (evt: any) => {
                reject(evt.target.error);
            };
        });
    }

    public async ReadManyVirtual(channels: { 
        Info: DataSetTypes.IDataSetMetaData, 
        ComponentChannels: { Key: TrenDAP.IChannelKey, Name: string}[], 
        EvalExpression: string, 
        ChannelSettings: any, 
        ChannelKey: string
    }[], channelMapping: HashTable<TrenDAP.IChannelKey, string>) {
        if (channels == null || channels.length === 0) {
            return Promise.resolve([]);
        }
    
        const db = await this.OpenDB();
        const tx = db.transaction(['Channel', 'Virtual'], 'readwrite');
        const channelStore = tx.objectStore('Channel');
        const virtualStore = tx.objectStore('Virtual');
    
        tx.onerror = (evt: any) => {
            return Promise.reject(evt.target.error);
        };

        const promiseArray = channels.map(virtualChannel => 
            new Promise<{ Data: DataSetTypes.IDataSetData, ChannelKey: string, ChannelSettings: any }>(async (resolve, reject) => {
                if (virtualChannel.ComponentChannels == null || virtualChannel.ComponentChannels.length === 0) {
                    resolve({Data: {SeriesData: { Minimum: [], Maximum: [], Average: []}, ...virtualChannel.Info}, ChannelKey: virtualChannel.ChannelKey, ChannelSettings: virtualChannel.ChannelSettings});
                    return;
                }
                const virtualRequest = virtualStore.get(virtualChannel.Info.ID);
                virtualRequest.onsuccess = (evt: any) => {
                    if (evt.target.result != null) {
                        console.log(evt.target.result);
                        if (_.isEqual(evt.target.result.Data.ComponentChannels, virtualChannel.ComponentChannels) && 
                            _.isEqual(evt.target.result.Data.EvalExpression, virtualChannel.EvalExpression)) 
                            resolve({
                                Data: {...virtualChannel.Info, SeriesData: evt.target.result.Data.SeriesData}, 
                                ChannelKey: virtualChannel.ChannelKey, 
                                ChannelSettings: virtualChannel.ChannelSettings
                        });
                        else reject();
                    }
                    else reject();
                };
                virtualRequest.onerror = (evt: any) => {
                    reject();
                };
            }).then(foundResults => Promise.resolve(foundResults), () => 
                new Promise<{ Data: DataSetTypes.IDataSetData, ChannelKey: TrenDAP.IChannelKey }[]>((resolve, reject) => {
                    let completedComponents = 0;
                    // Note: map preserves order, see specification from ECMAScript for more details
                    const componentResults: { Data: DataSetTypes.IDataSetData | undefined, ChannelKey: TrenDAP.IChannelKey }[] =
                        virtualChannel.ComponentChannels.map(component => ({ ChannelKey: component.Key, Data: undefined}));
                    virtualChannel.ComponentChannels.forEach(componentKey => {
                        const id = channelMapping.get(componentKey.Key);
                        if (id == null) return;
            
                        const request = channelStore.get(id);
                        request.onsuccess = (evt: any) => {
                            console.log(evt.target.result)
                            const resultIndex = componentResults.findIndex(compResult => _.isEqual(compResult.ChannelKey, componentKey.Key));
                            componentResults[resultIndex].Data = evt.target.result.Data;
                            completedComponents++;
                            if (completedComponents >= virtualChannel.ComponentChannels.length) {
                                return resolve(componentResults as { Data: DataSetTypes.IDataSetData, ChannelKey: TrenDAP.IChannelKey }[]);
                            }
                        };
                        request.onerror = (evt: any) => {
                            return reject(evt.target.error);
                        };
                    });
            })).then((results) => 
                new Promise<{ Data: DataSetTypes.IDataSetData, ChannelKey: string, ChannelSettings: any }>((resolve, reject) => {
                    if (!results.hasOwnProperty('length')) return resolve(results as { Data: DataSetTypes.IDataSetData, ChannelKey: string, ChannelSettings: any });
                    
                    // We've ensured this typing earlier
                    const realResults = results as { Data: DataSetTypes.IDataSetData, ChannelKey: TrenDAP.IChannelKey }[];
                    const sortedKeys = realResults.map(result => result.ChannelKey);
                    // Filter series to only common ones
                    const allSeries = realResults.map(result => Object.keys(result.Data.SeriesData));
                    const series = allSeries[0].filter(objectKey => 
                        !allSeries.some(objectKeyArray => objectKeyArray.findIndex(arrKey => arrKey === objectKey) === -1)
                    );

                    const virtualResult: DataSetTypes.IDataSetData = { ...virtualChannel.Info, SeriesData: { Minimum: [], Maximum: [], Average: [] }}

                    series.forEach(objectKey => {
                        const indexArray: number[] = Array(realResults.length).fill(0);
                        const valueArray: number[] = Array(realResults.length).fill(0);
                        let primaryTimeValue: undefined|number;
                        
                        evalLoop: while (true) {
                            let dataLoopContinue = true;
                            while (dataLoopContinue) {
                                // Considered the time stamp for our current value
                                primaryTimeValue = undefined;
                                dataLoopContinue = false;
    
                                // Finding values for each component
                                componentLoop : for(let compIndex = 0; compIndex < indexArray.length; compIndex++) {
                                    let currentValue: undefined|number[] = undefined;
                                    // Seek value that lies within range of primary time value
                                    while (currentValue == null || primaryTimeValue == null || currentValue[0] < (primaryTimeValue - AllowableVirtualTimeDelta)) {
                                        if (indexArray[compIndex] >= 0 && indexArray[compIndex] < realResults[compIndex].Data.SeriesData[objectKey].length) {
                                            // Grab this current value and check it
                                            currentValue = realResults[compIndex].Data.SeriesData[objectKey][indexArray[compIndex]];
                                            if (primaryTimeValue == null) primaryTimeValue = currentValue![0];
                                            // Restart component loop
                                            else if (currentValue![0] > primaryTimeValue + AllowableVirtualTimeDelta) {
                                                dataLoopContinue = true;
                                                break componentLoop;
                                            }
                                            indexArray[compIndex] += 1;
                                        } else {
                                            // We're out of data, no more valid points so just break the loop
                                            break evalLoop;
                                        }
                                    }
                                    valueArray[compIndex] = currentValue[1];
                                }
                            }
                            // Evaluating value array using indirect eval
                            virtualResult.SeriesData[objectKey].push([
                                primaryTimeValue as number, 
                                eval?.(`"use strict";
                                    ${sortedKeys.map((key, valueIndex) => `const ${keyReadableName(key)} = ${valueArray[valueIndex]};`).join(' ')}
                                    ${virtualChannel.EvalExpression}`)
                            ]);

                        }
                    });
                    
                    const result = virtualStore.put({ 
                        ID: virtualChannel.Info.ID, 
                        Created: moment().format(TimeFormat), 
                        Data: { 
                            EvalExpression: virtualChannel.EvalExpression,
                            ComponentChannels: virtualChannel.ComponentChannels, 
                            SeriesData: virtualResult.SeriesData 
                        }});

                    result.onsuccess = (evt: any) => {
                        resolve({
                            Data: virtualResult,
                            ChannelKey: virtualChannel.ChannelKey, 
                            ChannelSettings: virtualChannel.ChannelSettings
                        });
                    };
    
                    result.onerror = (evt: any) => {
                        reject(evt.target.error);
                    };
            }))
        );

        return Promise.all(promiseArray);
    }

    public ReadManyEvents(eventSources: WidgetTypes.ISelectedEvents<any>[]) {
        return new Promise<WidgetTypes.IWidgetEvents<any>[]>(async (resolve, reject) => {
            if (eventSources == null || eventSources.length === 0) {
                resolve([]);
                return;
            }

            let db = await this.OpenDB();
            let tx = db.transaction('Event', 'readonly');
            let store = tx.objectStore('Event');
            let results: WidgetTypes.IWidgetEvents<any>[] = [];

            let completed = 0;
            eventSources.forEach(eventSource => {
                if (eventSource.ID == null) return;

                let request = store.get(eventSource.ID);
                request.onsuccess = (evt: any) => {
                    results.push({ ...eventSource, Events: evt.target.result.Data });
                    completed++;
                    if (completed === eventSources.length) {
                        db.close();
                        resolve(results);
                    }
                };
                request.onerror = (evt: any) => {
                    reject(evt.target.error);
                };
            });

            tx.onerror = (evt: any) => {
                reject(evt.target.error);
            };
        });
    }

    public AddMultipleEvents(records: EventTableRow[]) {
        return new Promise(async (resolve, reject) => {
            let db = await this.OpenDB();

            let tx = db.transaction('Event', 'readwrite');
            let store = tx.objectStore('Event');
            Promise.all(records.map(r => new Promise((res, rej) => {
                let result = store.put({ ID: r.ID, Created: moment().format(TimeFormat), Data: r.Data });

                result.onsuccess = (evt: any) => {
                    res(evt.target.result);
                };

                result.onerror = (evt: any) => {
                    rej(evt.target.error);
                };
            }))).then(d => resolve(d)).catch(err => reject(err));

            tx.oncomplete = () => db.close();
        })
    }

    public AddMultiple(record: DataSetTypes.IDataSetData[]) {
        return new Promise(async (resolve, reject) => {
            const db = await this.OpenDB();

            const tx = db.transaction('Channel', 'readwrite');
            const store = tx.objectStore('Channel');
            Promise.all(record.map(r => new Promise((res, rej) => {
                const result = store.put({ ID: r.ID, Created: moment().format(TimeFormat), Data: r });

                result.onsuccess = (evt: any) => {
                    res(evt.target.result);
                };

                result.onerror = (evt: any) => {
                    rej(evt.target.error);
                };
            }))).then(d => resolve(d)).catch(err => reject(err));

            tx.oncomplete = () => db.close();
        })
    }
}