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
import { createVirtualFunc } from "../Widgets/HelperFunctions";

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

function getUpgradeTable(version: number): TrenDAPTable{
    switch(version){
        case 1: return 'Channel';
        case 2: return 'Event';
        case 3: return 'Virtual';
        default: throw new RangeError("Valid versions are 1-3 for trenDAP IndexedDB");
    }
}
const FullyUpgradedVersion = 3;

//To DO Add Documentation on what each function does...
export default class TrenDAPDB {

    private OpenDB(): Promise<IDBDatabase> {
        return indexedDB.databases().then(dbInfo =>
            new Promise<IDBDatabase>((resolve, reject) => {
                let version = dbInfo.find(db => db.name === 'TrenDAP')?.version ?? 0;
                if (version < FullyUpgradedVersion) version++;
                const req = indexedDB.open('TrenDAP', version);
                req.onupgradeneeded = evt => this.AddTable(evt, getUpgradeTable(version));

                req.onsuccess = (evt: any) => {
                    resolve(evt.target.result);
                }

                req.onerror = (evt: any) => {
                    // Due to an error with earlier versions, we must do this so that old bad versions that are way beyond v3 are removed...
                    indexedDB.deleteDatabase('TrenDAP');
                    reject(evt.target.error);
                };

                if (!('indexedDB' in window)) {
                    reject('This browser doesn\'t support IndexedDB');
                }

            })
        ).then((connection) => {
            if (connection.version === FullyUpgradedVersion) return Promise.resolve(connection);
            else {
                // Recursively upgrade until we have all upgrades needed
                connection.close();
                return Promise.resolve(this.OpenDB());
            }
        });
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
        VirtualInfo: TrenDAP.IVirtualChannelLoaded, 
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
                if (virtualChannel.VirtualInfo.ComponentChannels == null || virtualChannel.VirtualInfo.ComponentChannels.length === 0) {
                    resolve({Data: {SeriesData: { Minimum: [], Maximum: [], Average: []}, ...virtualChannel.Info}, ChannelKey: virtualChannel.ChannelKey, ChannelSettings: virtualChannel.ChannelSettings});
                    return;
                }
                const virtualRequest = virtualStore.get(virtualChannel.Info.ID);
                virtualRequest.onsuccess = (evt: any) => {
                    if (evt.target.result != null) {
                        if (_.isEqual(evt.target.result.Data.ComponentChannels, virtualChannel.VirtualInfo.ComponentChannels) && 
                            _.isEqual(evt.target.result.Data.EvalExpression, virtualChannel.VirtualInfo.Calculation)) 
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
                        virtualChannel.VirtualInfo.ComponentChannels.map(component => ({ ChannelKey: component.Key, Data: undefined}));
                    virtualChannel.VirtualInfo.ComponentChannels.forEach(componentKey => {
                        const id = channelMapping.get(componentKey.Key);
                        if (id == null) return;
            
                        const request = channelStore.get(id);
                        request.onsuccess = (evt: any) => {
                            const resultIndex = componentResults.findIndex(compResult => _.isEqual(compResult.ChannelKey, componentKey.Key));
                            componentResults[resultIndex].Data = evt.target.result.Data;
                            completedComponents++;
                            if (completedComponents >= virtualChannel.VirtualInfo.ComponentChannels.length) {
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
                    const virtualResult: DataSetTypes.IDataSetData = { ...virtualChannel.Info, SeriesData: { Minimum: [], Maximum: [], Average: [] }}

                    const userFunc = createVirtualFunc(virtualChannel.VirtualInfo.ComponentChannels, virtualChannel.VirtualInfo.Calculation);

                    Object.keys(virtualResult.SeriesData).forEach(objectKey => {
                        const indexArray: number[] = Array(realResults.length).fill(0);
                        let previousValueArray: number[][] = Array(realResults.length).fill([NaN, NaN]);
                        const valueArray: number[][] = Array(realResults.length).fill([NaN, NaN]);
                        const estimatedTimeGap: number[] = realResults.map(result => {
                            let count = 0;
                            let timeSum = 0;
                            while (count < 5 && count < result.Data.SeriesData[objectKey].length - 2) {
                                count++;
                                timeSum += result.Data.SeriesData[objectKey][count + 1][0] - result.Data.SeriesData[objectKey][count][0];
                            }
                            return (timeSum / count) * 1.05;
                        });

                        let currentTimeStamp: undefined|number;
                        while (indexArray.some((dataIndex, resultIndex) => dataIndex < realResults[resultIndex].Data.SeriesData[objectKey].length)) {
                            // Grab next potential values
                            for (let index = 0; index < valueArray.length; index++){
                                if (indexArray[index] < realResults[index].Data.SeriesData[objectKey].length) {
                                    valueArray[index] = realResults[index].Data.SeriesData[objectKey][indexArray[index]];
                                }
                                else valueArray[index] = [NaN, NaN];
                            }
                            // Find timestamp for this point
                            currentTimeStamp = Math.min(...valueArray.map(val => val[0]).filter(val => !isNaN(val)));
                            // Find if each value meets the threshold, use previous or NaN if not
                            for (let index = 0; index < valueArray.length; index++){
                                // Accepted value, increment index array index
                                if (valueArray[index][0] - currentTimeStamp <= virtualChannel.VirtualInfo.Threshold) {
                                    indexArray[index]++;
                                }
                                // Rejected value, check if previous or NaN should be used based on est. sampling
                                else if (valueArray[index][0] - previousValueArray[index][0] <= estimatedTimeGap[index]) {
                                    valueArray[index] = previousValueArray[index];
                                }
                                else valueArray[index] = [currentTimeStamp, NaN];

                            }
                            
                            // Set previous values, now that they are previous
                            previousValueArray = _.cloneDeep(valueArray);
                            const calculatedValue = [currentTimeStamp, userFunc(currentTimeStamp, ...valueArray.map(val => val[1]))];
                            if (!isNaN(calculatedValue[1])) virtualResult.SeriesData[objectKey].push(calculatedValue);
                        }
                    });
                    
                    const result = virtualStore.put({ 
                        ID: virtualChannel.Info.ID, 
                        Created: moment().format(TimeFormat), 
                        Data: { 
                            EvalExpression: virtualChannel.VirtualInfo.Calculation,
                            ComponentChannels: virtualChannel.VirtualInfo.ComponentChannels, 
                            SeriesData: virtualResult.SeriesData 
                        }});

                    result.onsuccess = (evt: any) => {
                        db.close();
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