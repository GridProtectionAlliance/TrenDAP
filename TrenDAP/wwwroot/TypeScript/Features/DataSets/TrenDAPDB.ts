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
type TrenDAPTable = 'Channel' | 'Event';
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
                secondReq.onsuccess = (secondEvt: any) => {
                    resolve(secondEvt.target.result as IDBDatabase);
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

    private AddTable(evt: any, table: string) {
        const upgradeDB = evt.target.result as IDBDatabase;
        if (!upgradeDB.objectStoreNames.contains(table)) {
            const ds = upgradeDB.createObjectStore(table, { keyPath: 'ID', autoIncrement: false });
            ds.createIndex("ID", "ID", { unique: true });
        }

    }

    public Read(key: string, tableName: TrenDAPTable = 'Channel') {
        return new Promise<(ChannelTableRow)>(async (resolve, reject) => {
            const db = await this.OpenDB();
            const tx = db.transaction(tableName, 'readonly');
            const store = tx.objectStore(tableName);
            const result = store.get(key);

            result.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };

            result.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            tx.oncomplete = () => db.close();

        });
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