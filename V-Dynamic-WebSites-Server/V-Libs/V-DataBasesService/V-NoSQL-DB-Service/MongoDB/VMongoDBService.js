"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const V_DB_Read_Exceptions_1 = require("../../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions");
const VDataBaseException_1 = require("../../../V-Exceptions/V-DBExecptions/VDataBaseException");
const mongoose_1 = require("mongoose");
class VMongoDBService {
    constructor(dataconnection, Class) {
        this.isconnected = false;
        this.linKtoDB = VMongoDBService.buildConnectionString(dataconnection);
        this.model = new Class().getModel();
        if (dataconnection.connect != undefined && dataconnection.connect) {
            this.connect();
        }
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
            if (!this.isconnected) {
                mongoose_1.connect(this.linKtoDB).then((value) => {
                    this.mongoose = value;
                    this.isconnected = true;
                    resolve(true);
                }, (reason) => {
                    reject(new VDataBaseException_1.VDataBaseException(reason, 408));
                });
            }
            else {
                resolve(true);
            }
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
                reject(new VDataBaseException_1.VDataBaseException("Trying to disconnect from an unconnected database", 503));
            }
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                this.model.findOne({ _id: id }).then((data) => {
                    if (data != null) {
                        resolve(data);
                    }
                    else {
                        reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException("Data not found"));
                    }
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    findOne(match) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                this.model.findOne(match.getMatch()).then((data) => {
                    if (data != null) {
                        resolve(data);
                    }
                    else {
                        reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException("Data not found"));
                    }
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    findAll(query) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const q = query.getQuery();
                if (q.length > 0) {
                    this.model.aggregate(query.getQuery()).then((datas) => {
                        resolve(datas);
                    });
                }
                else {
                    this.model.find({}).then((datas) => {
                        resolve(datas);
                    });
                }
            }, reject);
        });
    }
    addOne(query) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const obj = new this.model(query.getWriteQuery());
                obj.save().then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    addAll(query) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                this.model.insertMany(query.getWriteQuery()).then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    updateOne(query) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateOne(query2.filter, query2.values, query2.options).then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    updateAll(query) {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateMany(query2.filter, query2.values, query2.options).then((data) => {
                    resolve(data);
                }, (err) => {
                    reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    isConnected() {
        return this.isconnected;
    }
    checkIfConnectedAndDo(doaction, reject) {
        if (this.isConnected()) {
            doaction();
        }
        else {
            reject(new VDataBaseException_1.VDataBaseException("Could not connect to DataBase", 408));
        }
    }
}
exports.VMongoDBService = VMongoDBService;
//# sourceMappingURL=VMongoDBService.js.map