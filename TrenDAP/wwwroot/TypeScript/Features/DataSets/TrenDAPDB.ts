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
import moment from "moment";

export interface ChannelTableRow {
    ID: string,
    Created: string,
    Data: DataSetTypes.IDataSetData
}

const TimeFormat = 'MM/DD/YYYY HH:mm:ss';
//To DO Add Documentation on what each function does...
export default class TrenDAPDB {

    private OpenDB() {

        return new Promise<IDBDatabase>((resolve, reject) => {
            let req = indexedDB.open('TrenDAP', 2);

            req.onupgradeneeded = this.AddTables;

            req.onsuccess = (evt: any) => {
                resolve(evt.target.result as IDBDatabase);
            };
            req.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            if (!('indexedDB' in window)) {
                reject('This browser doesn\'t support IndexedDB');
            }

        })

    }

    private AddTables(evt: any) {
        let upgradeDB = evt.target.result as IDBDatabase;
        if (!upgradeDB.objectStoreNames.contains('Channel')) {
            let ds = upgradeDB.createObjectStore('Channel', { keyPath: 'ID', autoIncrement: false });
            ds.createIndex("ID", "ID", { unique: true });
        }

    }

    public Read(key: string) {
        return new Promise<(ChannelTableRow)>(async (resolve, reject) => {
            let db = await this.OpenDB();
            let tx = db.transaction('Channel', 'readonly');
            let store = tx.objectStore('Channel');
            let result = store.get(key);

            result.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };

            result.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            tx.oncomplete = () => db.close();

        });
    }

    public ReadMany(keys: string[]) {
        return new Promise<(ChannelTableRow[])>(async (resolve, reject) => {
            if (keys == null || keys.length === 0) {
                resolve([]);
                return;
            }

            let db = await this.OpenDB();
            let tx = db.transaction('Channel', 'readonly');
            let store = tx.objectStore('Channel');
            let results = [];

            keys.forEach(key => {
                if (key == null)
                    return
                let request = store.get(key);
                request.onsuccess = (evt: any) => {
                    results.push(evt.target.result);  
                };
                request.onerror = (evt: any) => {
                    reject(evt.target.error);  
                };
            });

            tx.oncomplete = () => {
                db.close();
                resolve(results);  
            };

            tx.onerror = (evt: any) => {
                reject(evt.target.error); 
            };
        });
    }



    public ReadAll() {
        return new Promise<(ChannelTableRow)[]>(async (resolve, reject) => {

            let db = await this.OpenDB();
            let tx = db.transaction('Channel', 'readonly');
            let store = tx.objectStore('Channel');
            let result = store.getAll();

            result.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };

            result.onerror = (evt: any) => {
                reject(evt.target.error);
            };
            tx.oncomplete = () => db.close();
        });
    }

    public Add(record: ChannelTableRow) {
        return new Promise(async (resolve, reject) => {
            let db = await this.OpenDB();

            let tx = db.transaction('Channel', 'readwrite');
            let store = tx.objectStore('Channel');
            let result = store.put({ ID: record.ID, Created: moment().format(TimeFormat), Data: record });

            result.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };

            result.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            tx.oncomplete = () => db.close();
        })
    }

    public AddMultiple(record: DataSetTypes.IDataSetData[]) {
        return new Promise(async (resolve, reject) => {
            let db = await this.OpenDB();

            let tx = db.transaction('Channel', 'readwrite');
            let store = tx.objectStore('Channel');
            Promise.all(record.map(r => new Promise((res, rej) => {
                let result = store.put({ ID: r.ID, Created: moment().format(TimeFormat), Data: r });

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


    public Delete(id: number) {
        return new Promise(async (resolve, reject) => {

        let db = await this.OpenDB();

        let tx = db.transaction('Channel', 'readwrite');
        let store = tx.objectStore('Channel');
        let result = store.delete(id);
        result.onsuccess = (evt: any) => {
            resolve(evt.target.result);
        };

        result.onerror = (evt: any) => {
            reject(evt.target.error);
        };
        tx.oncomplete = () => db.close();


        })

    }


}