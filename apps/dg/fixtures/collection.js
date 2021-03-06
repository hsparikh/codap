// ==========================================================================
//                    DG.CollectionRecord Fixtures
//
//  Copyright ©2013 KCP Technologies, Inc., a McGraw-Hill Education Company
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// ==========================================================================

sc_require('models/collection_record');

DG.CollectionRecord.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: 1,
    name: "Disks",
    description: "",
    parent: 2,
    attrs: [1, 2, 3, 4, 5, 8],
    cases: [1, 2, 3, 4, 5]
  },

  { guid: 2,
    name: "Games",
    description: "",
    children: [1],
    attrs: [6, 7],
    cases: [6]
  }

];
