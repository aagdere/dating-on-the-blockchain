export const WorldIdContractJson = () = {
    return {
        'contractName': "World ID Verification",
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "contract IWorldID",
                        "name": "_worldId",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "InvalidNullifier",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "input",
                        "type": "address"
                    }
                ],
                "name": "ProofVerified",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "input",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "root",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nullifierHash",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[8]",
                        "name": "proof",
                        "type": "uint256[8]"
                    }
                ],
                "name": "verifyAndExecute",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "bytecode": {
            "object": "0x60c0604052600160a05234801561001557600080fd5b506040516103b13803806103b183398101604081905261003491610045565b6001600160a01b0316608052610075565b60006020828403121561005757600080fd5b81516001600160a01b038116811461006e57600080fd5b9392505050565b60805160a051610319610098600039600060a701526000607701526103196000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e9b7055314610030575b600080fd5b61004361003e366004610210565b610045565b005b60008281526020819052604090205460ff161561007557604051632ec8265960e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633bc778e3847f0000000000000000000000000000000000000000000000000000000000000000610106886040516020016100f2919060609190911b6bffffffffffffffffffffffff1916815260140190565b6040516020818303038152906040526101db565b6040516bffffffffffffffffffffffff193060601b166020820152879061012f906034016100f2565b876040518763ffffffff1660e01b81526004016101519695949392919061026c565b60006040518083038186803b15801561016957600080fd5b505afa15801561017d573d6000803e3d6000fd5b50505060008381526020818152604091829020805460ff1916600117905590516001600160a01b03871681527f9cbb2c694eed9687ad9654ae462269807cc8b44f6dbd076f296bd916f1f3d0cd92500160405180910390a150505050565b60006008826040516020016101f091906102a8565b60408051601f198184030181529190528051602090910120901c92915050565b60008060008061016080868803121561022857600080fd5b85356001600160a01b038116811461023f57600080fd5b9450602086013593506040860135925080860187101561025e57600080fd5b509295919450926060019150565b60006101a0820190508782528660208301528560408301528460608301528360808301526101008360a084013760008152979650505050505050565b6000825160005b818110156102c957602081860181015185830152016102af565b818111156102d8576000828501525b50919091019291505056fea264697066735822122003824b34105add0e84fee45daefd3ac9fb312e9533a6246df3c75b7701a13b2464736f6c634300080f0033",
            "sourceMap": "164:2352:17:-:0;;;802:1;765:38;;1070:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1111:18:17;;;164:2352;;14:308:23;102:6;155:2;143:9;134:7;130:23;126:32;123:52;;;171:1;168;161:12;123:52;197:16;;-1:-1:-1;;;;;242:31:23;;232:42;;222:70;;288:1;285;278:12;222:70;311:5;14:308;-1:-1:-1;;;14:308:23:o;:::-;164:2352:17;;;;;;;;;;;;;;;;;;",
            "linkReferences": {}
        },
        "deployedBytecode": {
            "object": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e9b7055314610030575b600080fd5b61004361003e366004610210565b610045565b005b60008281526020819052604090205460ff161561007557604051632ec8265960e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633bc778e3847f0000000000000000000000000000000000000000000000000000000000000000610106886040516020016100f2919060609190911b6bffffffffffffffffffffffff1916815260140190565b6040516020818303038152906040526101db565b6040516bffffffffffffffffffffffff193060601b166020820152879061012f906034016100f2565b876040518763ffffffff1660e01b81526004016101519695949392919061026c565b60006040518083038186803b15801561016957600080fd5b505afa15801561017d573d6000803e3d6000fd5b50505060008381526020818152604091829020805460ff1916600117905590516001600160a01b03871681527f9cbb2c694eed9687ad9654ae462269807cc8b44f6dbd076f296bd916f1f3d0cd92500160405180910390a150505050565b60006008826040516020016101f091906102a8565b60408051601f198184030181529190528051602090910120901c92915050565b60008060008061016080868803121561022857600080fd5b85356001600160a01b038116811461023f57600080fd5b9450602086013593506040860135925080860187101561025e57600080fd5b509295919450926060019150565b60006101a0820190508782528660208301528560408301528460608301528360808301526101008360a084013760008152979650505050505050565b6000825160005b818110156102c957602081860181015185830152016102af565b818111156102d8576000828501525b50919091019291505056fea264697066735822122003824b34105add0e84fee45daefd3ac9fb312e9533a6246df3c75b7701a13b2464736f6c634300080f0033",
            "sourceMap": "164:2352:17:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1714:800;;;;;;:::i;:::-;;:::i;:::-;;;1945:15;:30;;;;;;;;;;;;;1941:61;;;1984:18;;-1:-1:-1;;;1984:18:17;;;;;;;;;;;1941:61;2102:7;-1:-1:-1;;;;;2102:19:17;;2135:4;2153:7;2174:37;2191:5;2174:23;;;;;;;751:2:23;747:15;;;;-1:-1:-1;;743:53:23;731:66;;822:2;813:12;;602:229;2174:23:17;;;;;;;;;;;;;:35;:37::i;:::-;2252:31;;-1:-1:-1;;2277:4:17;751:2:23;747:15;743:53;2252:31:17;;;731:66:23;2225:13:17;;2252:45;;813:12:23;;2252:31:17;602:229:23;2252:45:17;2311:5;2102:224;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2434:15:17;:30;;;;;;;;;;;;:37;;-1:-1:-1;;2434:37:17;2467:4;2434:37;;;2487:20;;-1:-1:-1;;;;;1626:32:23;;1608:51;;2487:20:17;;-1:-1:-1;1581:18:23;2487:20:17;;;;;;;1714:800;;;;:::o;302:145:18:-;366:7;439:1;427:5;410:23;;;;;;;;:::i;:::-;;;;-1:-1:-1;;410:23:18;;;;;;;;;400:34;;410:23;400:34;;;;392:48;;;302:145;-1:-1:-1;;302:145:18:o;14:583:23:-;125:6;133;141;149;180:3;224:2;212:9;203:7;199:23;195:32;192:52;;;240:1;237;230:12;192:52;266:23;;-1:-1:-1;;;;;318:31:23;;308:42;;298:70;;364:1;361;354:12;298:70;387:5;-1:-1:-1;439:2:23;424:18;;411:32;;-1:-1:-1;490:2:23;475:18;;462:32;;-1:-1:-1;509:18:23;;;506:31;-1:-1:-1;503:51:23;;;550:1;547;540:12;503:51;-1:-1:-1;14:583:23;;;;-1:-1:-1;14:583:23;588:2;573:18;;-1:-1:-1;14:583:23:o;836:621::-;1116:4;1158:3;1147:9;1143:19;1135:27;;1189:6;1178:9;1171:25;1232:6;1227:2;1216:9;1212:18;1205:34;1275:6;1270:2;1259:9;1255:18;1248:34;1318:6;1313:2;1302:9;1298:18;1291:34;1362:6;1356:3;1345:9;1341:19;1334:35;1420:6;1412;1406:3;1395:9;1391:19;1378:49;1449:1;1443:4;1436:15;836:621;;;;;;;;;:::o;1670:426::-;1799:3;1837:6;1831:13;1862:1;1872:129;1886:6;1883:1;1880:13;1872:129;;;1984:4;1968:14;;;1964:25;;1958:32;1945:11;;;1938:53;1901:12;1872:129;;;2019:6;2016:1;2013:13;2010:48;;;2054:1;2045:6;2040:3;2036:16;2029:27;2010:48;-1:-1:-1;2074:16:23;;;;;1670:426;-1:-1:-1;;1670:426:23:o",
            "linkReferences": {},
            "immutableReferences": {
                "22526": [
                    {
                        "start": 119,
                        "length": 32
                    }
                ],
                "22530": [
                    {
                        "start": 167,
                        "length": 32
                    }
                ]
            }
        },
        "methodIdentifiers": {
            "verifyAndExecute(address,uint256,uint256,uint256[8])": "e9b70553"
        },
        "ast": {
            "absolutePath": "src/Contract.sol",
            "id": 22605,
            "exportedSymbols": {
                "ByteHasher": [
                    22628
                ],
                "Contract": [
                    22604
                ],
                "IWorldID": [
                    22649
                ]
            },
            "nodeType": "SourceUnit",
            "src": "32:2485:17",
            "nodes": [
                {
                    "id": 22508,
                    "nodeType": "PragmaDirective",
                    "src": "32:24:17",
                    "literals": [
                        "solidity",
                        "^",
                        "0.8",
                        ".13"
                    ]
                },
                {
                    "id": 22510,
                    "nodeType": "ImportDirective",
                    "src": "58:52:17",
                    "absolutePath": "src/helpers/ByteHasher.sol",
                    "file": "./helpers/ByteHasher.sol",
                    "nameLocation": "-1:-1:-1",
                    "scope": 22605,
                    "sourceUnit": 22629,
                    "symbolAliases": [
                        {
                            "foreign": {
                                "id": 22509,
                                "name": "ByteHasher",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22628,
                                "src": "66:10:17",
                                "typeDescriptions": {}
                            },
                            "nameLocation": "-1:-1:-1"
                        }
                    ],
                    "unitAlias": ""
                },
                {
                    "id": 22512,
                    "nodeType": "ImportDirective",
                    "src": "111:51:17",
                    "absolutePath": "src/interfaces/IWorldID.sol",
                    "file": "./interfaces/IWorldID.sol",
                    "nameLocation": "-1:-1:-1",
                    "scope": 22605,
                    "sourceUnit": 22650,
                    "symbolAliases": [
                        {
                            "foreign": {
                                "id": 22511,
                                "name": "IWorldID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 22649,
                                "src": "119:8:17",
                                "typeDescriptions": {}
                            },
                            "nameLocation": "-1:-1:-1"
                        }
                    ],
                    "unitAlias": ""
                },
                {
                    "id": 22604,
                    "nodeType": "ContractDefinition",
                    "src": "164:2352:17",
                    "nodes": [
                        {
                            "id": 22515,
                            "nodeType": "UsingForDirective",
                            "src": "188:27:17",
                            "global": false,
                            "libraryName": {
                                "id": 22513,
                                "name": "ByteHasher",
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 22628,
                                "src": "194:10:17"
                            },
                            "typeName": {
                                "id": 22514,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "209:5:17",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_storage_ptr",
                                    "typeString": "bytes"
                                }
                            }
                        },
                        {
                            "id": 22519,
                            "nodeType": "EventDefinition",
                            "src": "220:35:17",
                            "anonymous": false,
                            "eventSelector": "9cbb2c694eed9687ad9654ae462269807cc8b44f6dbd076f296bd916f1f3d0cd",
                            "name": "ProofVerified",
                            "nameLocation": "226:13:17",
                            "parameters": {
                                "id": 22518,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 22517,
                                        "indexed": false,
                                        "mutability": "mutable",
                                        "name": "input",
                                        "nameLocation": "248:5:17",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 22519,
                                        "src": "240:13:17",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 22516,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "240:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "239:15:17"
                            }
                        },
                        {
                            "id": 22522,
                            "nodeType": "ErrorDefinition",
                            "src": "572:25:17",
                            "documentation": {
                                "id": 22520,
                                "nodeType": "StructuredDocumentation",
                                "src": "512:55:17",
                                "text": "@notice Thrown when attempting to reuse a nullifier"
                            },
                            "errorSelector": "5d904cb2",
                            "name": "InvalidNullifier",
                            "nameLocation": "578:16:17",
                            "parameters": {
                                "id": 22521,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "594:2:17"
                            }
                        },
                        {
                            "id": 22526,
                            "nodeType": "VariableDeclaration",
                            "src": "677:35:17",
                            "constant": false,
                            "documentation": {
                                "id": 22523,
                                "nodeType": "StructuredDocumentation",
                                "src": "603:69:17",
                                "text": "@dev The World ID instance that will be used for verifying proofs"
                            },
                            "mutability": "immutable",
                            "name": "worldId",
                            "nameLocation": "705:7:17",
                            "scope": 22604,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IWorldID_$22649",
                                "typeString": "contract IWorldID"
                            },
                            "typeName": {
                                "id": 22525,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 22524,
                                    "name": "IWorldID",
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 22649,
                                    "src": "677:8:17"
                                },
                                "referencedDeclaration": 22649,
                                "src": "677:8:17",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IWorldID_$22649",
                                    "typeString": "contract IWorldID"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "id": 22530,
                            "nodeType": "VariableDeclaration",
                            "src": "765:38:17",
                            "constant": false,
                            "documentation": {
                                "id": 22527,
                                "nodeType": "StructuredDocumentation",
                                "src": "719:41:17",
                                "text": "@dev The World ID group ID (always 1)"
                            },
                            "mutability": "immutable",
                            "name": "groupId",
                            "nameLocation": "792:7:17",
                            "scope": 22604,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 22528,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "765:7:17",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "hexValue": "31",
                                "id": 22529,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "802:1:17",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "visibility": "internal"
                        },
                        {
                            "id": 22535,
                            "nodeType": "VariableDeclaration",
                            "src": "941:49:17",
                            "constant": false,
                            "documentation": {
                                "id": 22531,
                                "nodeType": "StructuredDocumentation",
                                "src": "810:126:17",
                                "text": "@dev Whether a nullifier hash has been used already. Used to guarantee an action is only performed once by a single person"
                            },
                            "mutability": "mutable",
                            "name": "nullifierHashes",
                            "nameLocation": "975:15:17",
                            "scope": 22604,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                            },
                            "typeName": {
                                "id": 22534,
                                "keyType": {
                                    "id": 22532,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "949:7:17",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "941:24:17",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                    "typeString": "mapping(uint256 => bool)"
                                },
                                "valueType": {
                                    "id": 22533,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "960:4:17",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "id": 22547,
                            "nodeType": "FunctionDefinition",
                            "src": "1070:66:17",
                            "body": {
                                "id": 22546,
                                "nodeType": "Block",
                                "src": "1101:35:17",
                                "statements": [
                                    {
                                        "expression": {
                                            "id": 22544,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "id": 22542,
                                                "name": "worldId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22526,
                                                "src": "1111:7:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IWorldID_$22649",
                                                    "typeString": "contract IWorldID"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "id": 22543,
                                                "name": "_worldId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22539,
                                                "src": "1121:8:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IWorldID_$22649",
                                                    "typeString": "contract IWorldID"
                                                }
                                            },
                                            "src": "1111:18:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IWorldID_$22649",
                                                "typeString": "contract IWorldID"
                                            }
                                        },
                                        "id": 22545,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1111:18:17"
                                    }
                                ]
                            },
                            "documentation": {
                                "id": 22536,
                                "nodeType": "StructuredDocumentation",
                                "src": "997:68:17",
                                "text": "@param _worldId The WorldID instance that will verify the proofs"
                            },
                            "implemented": true,
                            "kind": "constructor",
                            "modifiers": [],
                            "name": "",
                            "nameLocation": "-1:-1:-1",
                            "parameters": {
                                "id": 22540,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 22539,
                                        "mutability": "mutable",
                                        "name": "_worldId",
                                        "nameLocation": "1091:8:17",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 22547,
                                        "src": "1082:17:17",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IWorldID_$22649",
                                            "typeString": "contract IWorldID"
                                        },
                                        "typeName": {
                                            "id": 22538,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 22537,
                                                "name": "IWorldID",
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 22649,
                                                "src": "1082:8:17"
                                            },
                                            "referencedDeclaration": 22649,
                                            "src": "1082:8:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IWorldID_$22649",
                                                "typeString": "contract IWorldID"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1081:19:17"
                            },
                            "returnParameters": {
                                "id": 22541,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1101:0:17"
                            },
                            "scope": 22604,
                            "stateMutability": "nonpayable",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "id": 22603,
                            "nodeType": "FunctionDefinition",
                            "src": "1714:800:17",
                            "body": {
                                "id": 22602,
                                "nodeType": "Block",
                                "src": "1864:650:17",
                                "statements": [
                                    {
                                        "condition": {
                                            "baseExpression": {
                                                "id": 22561,
                                                "name": "nullifierHashes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22535,
                                                "src": "1945:15:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                    "typeString": "mapping(uint256 => bool)"
                                                }
                                            },
                                            "id": 22563,
                                            "indexExpression": {
                                                "id": 22562,
                                                "name": "nullifierHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22554,
                                                "src": "1961:13:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "1945:30:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 22567,
                                        "nodeType": "IfStatement",
                                        "src": "1941:61:17",
                                        "trueBody": {
                                            "errorCall": {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 22564,
                                                    "name": "InvalidNullifier",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22522,
                                                    "src": "1984:16:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                        "typeString": "function () pure"
                                                    }
                                                },
                                                "id": 22565,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1984:18:17",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 22566,
                                            "nodeType": "RevertStatement",
                                            "src": "1977:25:17"
                                        }
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "id": 22571,
                                                    "name": "root",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22552,
                                                    "src": "2135:4:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22572,
                                                    "name": "groupId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22530,
                                                    "src": "2153:7:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 22575,
                                                                    "name": "input",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 22550,
                                                                    "src": "2191:5:17",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 22573,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "2174:3:17",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 22574,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2174:16:17",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 22576,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2174:23:17",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 22577,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "hashToField",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 22627,
                                                        "src": "2174:35:17",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                                                            "typeString": "function (bytes memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 22578,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2174:37:17",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22579,
                                                    "name": "nullifierHash",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22554,
                                                    "src": "2225:13:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 22584,
                                                                            "name": "this",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -28,
                                                                            "src": "2277:4:17",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_Contract_$22604",
                                                                                "typeString": "contract Contract"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_contract$_Contract_$22604",
                                                                                "typeString": "contract Contract"
                                                                            }
                                                                        ],
                                                                        "id": 22583,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "2269:7:17",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22582,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "2269:7:17",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 22585,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "2269:13:17",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 22580,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "2252:3:17",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 22581,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2252:16:17",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 22586,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2252:31:17",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 22587,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "hashToField",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 22627,
                                                        "src": "2252:43:17",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                                                            "typeString": "function (bytes memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 22588,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2252:45:17",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22589,
                                                    "name": "proof",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22558,
                                                    "src": "2311:5:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$8_calldata_ptr",
                                                        "typeString": "uint256[8] calldata"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_array$_t_uint256_$8_calldata_ptr",
                                                        "typeString": "uint256[8] calldata"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 22568,
                                                    "name": "worldId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22526,
                                                    "src": "2102:7:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IWorldID_$22649",
                                                        "typeString": "contract IWorldID"
                                                    }
                                                },
                                                "id": 22570,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "verifyProof",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 22648,
                                                "src": "2102:19:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_array$_t_uint256_$8_memory_ptr_$returns$__$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256[8] memory) view external"
                                                }
                                            },
                                            "id": 22590,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2102:224:17",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 22591,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2102:224:17"
                                    },
                                    {
                                        "expression": {
                                            "id": 22596,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "baseExpression": {
                                                    "id": 22592,
                                                    "name": "nullifierHashes",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22535,
                                                    "src": "2434:15:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                        "typeString": "mapping(uint256 => bool)"
                                                    }
                                                },
                                                "id": 22594,
                                                "indexExpression": {
                                                    "id": 22593,
                                                    "name": "nullifierHash",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22554,
                                                    "src": "2450:13:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "2434:30:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "hexValue": "74727565",
                                                "id": 22595,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2467:4:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            },
                                            "src": "2434:37:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 22597,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2434:37:17"
                                    },
                                    {
                                        "eventCall": {
                                            "arguments": [
                                                {
                                                    "id": 22599,
                                                    "name": "input",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22550,
                                                    "src": "2501:5:17",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "id": 22598,
                                                "name": "ProofVerified",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22519,
                                                "src": "2487:13:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                    "typeString": "function (address)"
                                                }
                                            },
                                            "id": 22600,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2487:20:17",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 22601,
                                        "nodeType": "EmitStatement",
                                        "src": "2482:25:17"
                                    }
                                ]
                            },
                            "documentation": {
                                "id": 22548,
                                "nodeType": "StructuredDocumentation",
                                "src": "1142:567:17",
                                "text": "@param input An arbitrary input from the user, usually the user's wallet address (check README for further details)\n @param root The root of the Merkle tree (returned by the JS widget).\n @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).\n @param proof The zero-knowledge proof that demostrates the claimer is registered with World ID (returned by the JS widget).\n @dev Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past."
                            },
                            "functionSelector": "e9b70553",
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "verifyAndExecute",
                            "nameLocation": "1723:16:17",
                            "parameters": {
                                "id": 22559,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 22550,
                                        "mutability": "mutable",
                                        "name": "input",
                                        "nameLocation": "1757:5:17",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 22603,
                                        "src": "1749:13:17",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 22549,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1749:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 22552,
                                        "mutability": "mutable",
                                        "name": "root",
                                        "nameLocation": "1780:4:17",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 22603,
                                        "src": "1772:12:17",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 22551,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1772:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 22554,
                                        "mutability": "mutable",
                                        "name": "nullifierHash",
                                        "nameLocation": "1802:13:17",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 22603,
                                        "src": "1794:21:17",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 22553,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1794:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 22558,
                                        "mutability": "mutable",
                                        "name": "proof",
                                        "nameLocation": "1845:5:17",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 22603,
                                        "src": "1825:25:17",
                                        "stateVariable": false,
                                        "storageLocation": "calldata",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$8_calldata_ptr",
                                            "typeString": "uint256[8]"
                                        },
                                        "typeName": {
                                            "baseType": {
                                                "id": 22555,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1825:7:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22557,
                                            "length": {
                                                "hexValue": "38",
                                                "id": 22556,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1833:1:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_8_by_1",
                                                    "typeString": "int_const 8"
                                                },
                                                "value": "8"
                                            },
                                            "nodeType": "ArrayTypeName",
                                            "src": "1825:10:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$8_storage_ptr",
                                                "typeString": "uint256[8]"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1739:117:17"
                            },
                            "returnParameters": {
                                "id": 22560,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1864:0:17"
                            },
                            "scope": 22604,
                            "stateMutability": "nonpayable",
                            "virtual": false,
                            "visibility": "public"
                        }
                    ],
                    "abstract": false,
                    "baseContracts": [],
                    "canonicalName": "Contract",
                    "contractDependencies": [],
                    "contractKind": "contract",
                    "fullyImplemented": true,
                    "linearizedBaseContracts": [
                        22604
                    ],
                    "name": "Contract",
                    "nameLocation": "173:8:17",
                    "scope": 22605,
                    "usedErrors": [
                        22522
                    ]
                }
            ],
            "license": "MIT"
        },
        "id": 17
    }
};