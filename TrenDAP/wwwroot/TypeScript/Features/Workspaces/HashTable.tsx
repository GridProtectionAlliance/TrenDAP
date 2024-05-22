//******************************************************************************************************
//  HashTable.tsx - Gbtc
//
//  Copyright (c) 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  04/10/2024 - Preston Crawford CHANGE THIS*****************************************/*/*/
//       Generated original version of source code.
//
//******************************************************************************************************

export default class HashTable<K, V> {
    private map: Map<string, V>;
    public hashFunction: (key: K) => string

    //lets make a default constructor here.. 

    constructor(hashFunction: (key: K) => string, values: [K,V][] = []) {
        this.map = new Map<string, V>(values.map(v => [hashFunction(v[0]), v[1]]));
        this.hashFunction = hashFunction
    }

    set(key: K, item: V) {
        const hashKey = this.hashFunction(key);
        this.map.set(hashKey, item);
    }

    get(key: K): V {
        const hashKey = this.hashFunction(key);
        return this.map.get(hashKey);
    }

    delete(key: K) {
        const hashKey = this.hashFunction(key);
        this.map.delete(hashKey);
    }

    has(key: K): boolean {
        const hashKey = this.hashFunction(key);
        return this.map.has(hashKey);
    }

    *entries(): IterableIterator<[string, V]> {
        for (const entry of this.map.entries()) {
            yield entry;
        }
    }
}