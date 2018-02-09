"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const V_DB_Read_Exceptions_1 = require("../../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions");
const VDataBaseException_1 = require("../../../V-Exceptions/V-DBExecptions/VDataBaseException");
const mongoose_1 = require("mongoose");
class VMongoDBService {
    constructor(dataconnection, collectionName, schema) {
        this.isconnected = false;
        this.linKtoDB = VMongoDBService.buildConnectionString(dataconnection);
        this.collectionName = collectionName;
        this.schema = schema;
    }
    static buildConnectionString(obj) {
        let str = 'mongodb://';
        obj.username = obj.username != undefined ? obj.username : '';
        obj.password = obj.password != undefined ? obj.password : '';
        obj.host = obj.host != undefined ? obj.host : 'localhost';
        obj.port = obj.port != undefined ? obj.port : 27017;
        if (obj.username != '' && obj.password != '') {
            str = str + obj.username + ':' + obj.password + '@';
        }
        str = str + obj.host + ':' + obj.port + '/' + obj.database;
        return str;
    }
    connect() {
        return new Promise((resolve, reject) => {
            mongoose_1.connect(this.linKtoDB).then((value) => {
                this.mongoose = value;
                this.model = mongoose_1.model(this.collectionName, this.schema);
                this.isconnected = true;
                return resolve(value);
            }, (reason) => {
                return reject(new VDataBaseException_1.VDataBaseException(reason.toString()));
            });
        });
    }
    disconnect() {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                this.mongoose.connection.close().then(() => {
                    return resolve(true);
                }, (err) => {
                    return reject(err);
                });
            }
            else {
                return reject("Trying to disconnect from an unconnected database");
            }
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.findOne({ _id: id }).then((data) => {
                    if (data != null) {
                        return resolve(data);
                    }
                    else {
                        reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException("not found"));
                    }
                }, (err) => {
                    return reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    findAll(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.aggregate(query.getQuery()).then((datas) => {
                    return resolve(datas);
                });
            });
        });
    }
    addOne(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const obj = new this.model(query.getWriteQuery());
                obj.save().then((data) => {
                    return resolve(data);
                }, (err) => {
                    return reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    addAll(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.insertMany(query.getWriteQuery()).then((data) => {
                    return resolve(data);
                }, (err) => {
                    return reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    updateOne(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateOne(query2.filter, query2.values).then((data) => {
                    return resolve(data);
                }, (err) => {
                    return reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    updateAll(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateMany(query2.filter, query2.values).then((data) => {
                    return resolve(data);
                }, (err) => {
                    return reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    isConnected() {
        return this.isconnected;
    }
    giveModel() {
        return this.model;
    }
    checkIfConnectedAndDo(doaction) {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                doaction();
            }
            else {
                return reject("Could not connect to DataBase");
            }
        });
    }
}
exports.VMongoDBService = VMongoDBService;
//# sourceMappingURL=VMongoDBService.js.map