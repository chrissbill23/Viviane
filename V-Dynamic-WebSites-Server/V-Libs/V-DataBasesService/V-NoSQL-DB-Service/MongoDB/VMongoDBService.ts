/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VNoSQLReadServiceInterface} from "../VNoSQLReadServiceInterface";
import {VDBReadDataNotFoundException} from "../../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions";
import {VNoSQLWriteUpdateServiceInterface} from "../VNoSQLWriteUpdateServiceInterface";
import {VDataBaseException} from "../../../V-Exceptions/V-DBExecptions/VDataBaseException";
import {connect, Model, Mongoose} from "mongoose";
import {VDBMongoDocument} from "./VDBMongoDocument";
import {MongoReadQueryBaseStream} from "./MongoReadQueryBaseStream";
import {MongoWriteUpdateQueryStream} from "./MongoWriteUpdateQueryStream";
export interface Configuration {
    host?: string;
    port?: number;
    database: string;
    username?: string;
    password?: string;
    // options?: MongoDB.MongoClientOptions;
    connect?: boolean;
}
export class VMongoDBService<T extends VDBMongoDocument> implements VNoSQLReadServiceInterface,
    VNoSQLWriteUpdateServiceInterface {
    private linKtoDB: string;
    private model: Model<any>;
    private mongoose: Mongoose;
    private isconnected: boolean = false;
    private static buildConnectionString(obj: Configuration): string {
        let str: string  = 'mongodb://';
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
    constructor(dataconnection: Configuration, Class: new () => T ) {
        this.linKtoDB = VMongoDBService.buildConnectionString(dataconnection);
        this.model = new Class().getModel();
        if (dataconnection.connect != undefined && dataconnection.connect) {
            this.connect();
        }
    }
    public connect(): Promise<boolean> {
       return new Promise((resolve, reject) => {
           if (!this.isconnected) {
               connect(this.linKtoDB).then((value) => {
                   this.mongoose = value;
                   this.isconnected = true;
                   resolve(true);
               }, (reason) => {
                   reject(new VDataBaseException(reason, 408));
               });
           } else {
               resolve(true);
           }
       });
    }
    public disconnect(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                this.mongoose.connection.close().then(() => {
                   resolve(true);
                }, (err) => {
                    reject(err);
                });
            } else {
                reject(new VDataBaseException("Trying to disconnect from an unconnected database", 503));
            }
        });
    }
    public findById(id: string): Promise<T> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
            this.model.findOne({_id: id}).then((data: T) => {
                if (data != null) {
                    resolve(data);
                } else {
                    reject(new VDBReadDataNotFoundException("Data not found"));
                }
            }, (err) => {
                reject(new VDBReadDataNotFoundException(err));
            });
        }, reject);
        });
    }
    public findOne(match: MongoReadQueryBaseStream): Promise<T> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                this.model.findOne(match.getMatch()).then((data: T) => {
                    if (data != null) {
                        resolve(data);
                    } else {
                        reject(new VDBReadDataNotFoundException("Data not found"));
                    }
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    public findAll(query: MongoReadQueryBaseStream): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const q = query.getQuery();
                if (q.length > 0) {
                    this.model.aggregate(query.getQuery()).then((datas: T[]) => {
                        resolve(datas);
                    });
                } else {
                    this.model.find({}).then((datas: T[]) => {
                        resolve(datas);
                    });
                }
            }, reject);
        });
    }
    public addOne(query: MongoWriteUpdateQueryStream<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const obj = new this.model(query.getWriteQuery());
                obj.save().then((data: T) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    public addAll(query: MongoWriteUpdateQueryStream<T>): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                this.model.insertMany(query.getWriteQuery()).then((data: T[]) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    public updateOne(query: MongoWriteUpdateQueryStream<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateOne(query2.filter, query2.values, query2.options).then((data: T) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    public updateAll(query: MongoWriteUpdateQueryStream<T>): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateMany(query2.filter, query2.values, query2.options).then((data: T[]) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err));
                });
            }, reject);
        });
    }
    public isConnected(): boolean {
        return this.isconnected;
    }
    private checkIfConnectedAndDo(doaction: any, reject: any): void {
        if (this.isConnected()) {
                doaction();
        } else {
            reject(new VDataBaseException("Could not connect to DataBase", 408));
        }
    }
}
