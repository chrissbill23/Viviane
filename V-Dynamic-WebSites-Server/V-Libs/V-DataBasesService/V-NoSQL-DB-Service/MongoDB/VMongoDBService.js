"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const V_DB_Read_Exceptions_1 = require("../../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions");
const VDataBaseException_1 = require("../../../V-Exceptions/V-DBExecptions/VDataBaseException");
const mongoose_1 = require("mongoose");
class VMongoDBService {
    constructor(dataconnection, Class) {
        this.isconnected = false;
        this.linKtoDB = VMongoDBService.buildConnectionString(dataconnection);
        this.model = new Class().getModel();
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
                this.isconnected = true;
                resolve(true);
            }, (reason) => {
                reject(new VDataBaseException_1.VDataBaseException(reason.toString()));
            });
        });
    }
    disconnect() {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                this.mongoose.connection.close().then(() => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
            }
            else {
                reject("Trying to disconnect from an unconnected database");
            }
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.findOne({ _id: id }).then((data) => {
                    if (data != null) {
                        resolve(data);
                    }
                    else {
                        reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException("not found"));
                    }
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    findAll(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.aggregate(query.getQuery()).then((datas) => {
                    resolve(datas);
                });
            });
        });
    }
    addOne(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const obj = new this.model(query.getWriteQuery());
                obj.save().then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    addAll(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.insertMany(query.getWriteQuery()).then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    updateOne(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateOne(query2.filter, query2.values, query2.options).then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    updateAll(query) {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateMany(query2.filter, query2.values, query2.options).then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    isConnected() {
        return this.isconnected;
    }
    checkIfConnectedAndDo(doaction) {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                doaction();
            }
            else {
                reject("Could not connect to DataBase");
            }
        });
    }
}
exports.VMongoDBService = VMongoDBService;
//# sourceMappingURL=VMongoDBService.js.map