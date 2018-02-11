import {VNoSQLReadServiceInterface} from "../VNoSQLReadServiceInterface";
import {VDBReadDataNotFoundException} from "../../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions";
import {VNoSQLWriteUpdateServiceInterface} from "../VNoSQLWriteUpdateServiceInterface";
import {VDataBaseException} from "../../../V-Exceptions/V-DBExecptions/VDataBaseException";
import {connect, Model, Mongoose, Schema} from "mongoose";
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
    }
    public connect(): Promise<boolean> {
       return new Promise((resolve, reject) => {
           connect(this.linKtoDB).then((value) => {
               this.mongoose = value;
               this.isconnected = true;
               resolve(true);
           }, (reason) => {
               reject(new VDataBaseException(reason.toString()));
           });
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
                reject("Trying to disconnect from an unconnected database");
            }
        });
    }
    public findById(id: string): Promise<T> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
            this.model.findOne({_id: id}).then((data: T) => {
                if (data != null) {
                    resolve(data);
                } else {
                    reject(new VDBReadDataNotFoundException("not found"));
                }
            }, (err) => {
                reject(new VDBReadDataNotFoundException(err.toString()));
            });
        });
        });
    }
    public findAll(query: MongoReadQueryBaseStream): Promise<T[]> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.aggregate(query.getQuery()).then((datas: T[]) => {
                    resolve(datas);
                });
            });
        });
    }
    public addOne(query: MongoWriteUpdateQueryStream<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const obj = new this.model(query.getWriteQuery());
                obj.save().then((data: T) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    public addAll(query: MongoWriteUpdateQueryStream<T>): Promise<T[]> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                this.model.insertMany(query.getWriteQuery()).then((data: T[]) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    public updateOne(query: MongoWriteUpdateQueryStream<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateOne(query2.filter, query2.values, query2.options).then((data: T) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    public updateAll(query: MongoWriteUpdateQueryStream<T>): Promise<T[]> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const query2 = query.getUpdateQuery().filter;
                this.model.updateMany(query2.filter, query2.values, query2.options).then((data: T[]) => {
                    resolve(data);
                }, (err) => {
                    reject(new VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    public isConnected(): boolean {
        return this.isconnected;
    }
    private checkIfConnectedAndDo(doaction: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                doaction();
            } else {
                reject("Could not connect to DataBase");
            }
        });
    }
}
