/*
 * Copyright 2015 Anton Tananaev (anton.tananaev@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Ext.define('Traccar.store.DistanceUnits', {
    extend: 'Ext.data.Store',
    fields: ['key', 'name'],
    data: [
        {'key': 'km', 'name': strings.sharedKm},
        {'key': 'mi', 'name': strings.sharedMi}
    ],
    
    convert: function(value, unit) {
        switch (unit) {
            case 'km':
                return Math.round(value * 0.1) / 100;
            case 'mi':
                return Math.round(value * 0.0621371) / 100;
        }
        return value;
    },
    
    getUnitName: function(unit) {
        if (unit) {
            return this.findRecord('key', unit).get('name');
        } else {
            return '';
        }
    }
});
