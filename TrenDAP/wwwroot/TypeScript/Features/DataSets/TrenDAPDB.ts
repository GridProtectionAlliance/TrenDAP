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

import { TrenDAP } from "../../global";
import moment from "moment";

export interface DataSetTableRow {
    ID: number,
    Created: string,
    Data: (TrenDAP.iDataSetReturn)[]
}
const TimeFormat = 'MM/DD/YYYY HH:mm';
export default class TrenDAPDB {

    private OpenDB() {

        return new Promise<IDBDatabase>((resolve, reject) => {
            let req = indexedDB.open('TrenDAP', 1);

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
        if (!upgradeDB.objectStoreNames.contains('DataSet')) {
            let ds = upgradeDB.createObjectStore('DataSet', { keyPath: 'ID', autoIncrement: false });
            ds.createIndex("ID", "ID", { unique: true });
        }

    }

    public Read(table: string, id: number) {
        return new Promise<(DataSetTableRow)>(async (resolve, reject) => {

            let db = await this.OpenDB();
            let tx = db.transaction(table, 'readonly');
            let store = tx.objectStore(table);
            let result = store.get(id);

            result.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };

            result.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            tx.oncomplete = () => db.close();

        });
    }

    public ReadAll(table: string) {
        return new Promise<(DataSetTableRow)[]>(async (resolve, reject) => {

            let db = await this.OpenDB();
            let tx = db.transaction(table, 'readonly');
            let store = tx.objectStore(table);
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

    public Add(table: string, id: number, name: string, record: any) {
        return new Promise(async (resolve, reject) => {


            let db = await this.OpenDB();

            let tx = db.transaction(table, 'readwrite');
            let store = tx.objectStore(table);
            let result = store.put({ ID: id, Created: moment().format(TimeFormat), Name: name, Data: record });

            result.onsuccess = (evt: any) => {
                resolve(evt.target.result);
            };

            result.onerror = (evt: any) => {
                reject(evt.target.error);
            };

            tx.oncomplete = () => db.close();
        })
    }

    public AddMultiple(table: string, id: number, name: string, record: any[]) {
        return new Promise(async (resolve, reject) => {


            let db = await this.OpenDB();

            let tx = db.transaction(table, 'readwrite');
            let store = tx.objectStore(table);
            Promise.all(record.map(r => new Promise((res, rej) => {
                let result = store.put({ ID: id, Created: moment().format(TimeFormat), Name: name, Data: record });

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


    public Delete(table: string, id: number) {
        return new Promise(async (resolve, reject) => {

        let db = await this.OpenDB();

        let tx = db.transaction(table, 'readwrite');
        let store = tx.objectStore(table);
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