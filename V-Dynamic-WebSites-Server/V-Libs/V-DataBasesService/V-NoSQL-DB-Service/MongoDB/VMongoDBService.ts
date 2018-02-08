import {VNoSQLReadServiceInterface} from "../VNoSQLReadServiceInterface";
import {VDBReadDataNotFoundException} from "../../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions";
import {VNoSQLWriteUpdateServiceInterface} from "../VNoSQLWriteUpdateServiceInterface";
import {WriteUpdateObjectQueryInterface} from "../../QueryObject/WriteUpdateObjectQueryInterface";
import {VDataBaseException} from "../../../V-Exceptions/V-DBExecptions/VDataBaseException";
import {connect, Mongoose, model, Schema} from "mongoose";
import {VDBMongoDocumentInterface} from "./VDBMongoDocumentInterface";
import {MongoReadQueryObjectInterface} from "./MongoReadQueryObjectInterface";
export interface Configuration {
    host?: string;
    port?: number;
    database: string;
    username?: string;
    password?: string;
    // options?: MongoDB.MongoClientOptions;
}
export class VMongoDBService implements VNoSQLReadServiceInterface,
    VNoSQLWriteUpdateServiceInterface {
    private model;
    private linKtoDB: string;
    private mongoose: Mongoose;
    private collectionName: string;
    private schema: Schema;
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
    constructor(dataconnection: Configuration, collectionName: string, schema: Schema) {
        this.linKtoDB = VMongoDBService.buildConnectionString(dataconnection);
        this.collectionName = collectionName;
        this.schema = schema;
    }
    public connect(): Promise<any> {
       return new Promise((resolve, reject) => {
           connect(this.linKtoDB).then((value) => {
               this.mongoose = value;
               this.model = model(this.collectionName, this.schema);
               this.isconnected = true;
               return resolve(value);
           }, (reason) => {
               return reject(new VDataBaseException(reason.toString()));
           });
       });
    }
    public disconnect(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                this.mongoose.connection.close().then(() => {
                    return resolve(true);
                }, (err) => {
                    return reject(err);
                });
            } else {
                return reject("Trying to disconnect from an unconnected database");
            }
        });
    }
    public findById(id: string): Promise<VDBMongoDocumentInterface> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
            this.model.findOne({_id: id}).then((data: VDBMongoDocumentInterface) => {
                if (data != null) {
                    return resolve(data);
                } else {
                    reject(new VDBReadDataNotFoundException("not found"));
                }
            }, (err) => {
                return reject(new VDBReadDataNotFoundException(err.toString()));
            });
        });
        });
    }
    public findAll(query: MongoReadQueryObjectInterface): Promise<VDBMongoDocumentInterface[]> {
        return new Promise((resolve, reject) => {
           reject(new VDBReadDataNotFoundException("not found"));
        });
    }
    public addOne(query: WriteUpdateObjectQueryInterface): Promise<VDBMongoDocumentInterface> {
        return new Promise((resolve, reject) => {
            return this.checkIfConnectedAndDo(() => {
                const obj = new this.model(query.getWriteQuery());
                obj.save().then((data: VDBMongoDocumentInterface) => {
                    return resolve(data);
                }, (err) => {
                    return reject(new VDBReadDataNotFoundException(err.toString()));
                });
            });
        });
    }
    public addAll(...query: WriteUpdateObjectQueryInterface[]): Promise<VDBMongoDocumentInterface[]> {
        return new Promise((resolve, reject) => {
            reject(new VDBReadDataNotFoundException("not found"));
        });
    }
    public updateOne(query: WriteUpdateObjectQueryInterface): Promise<VDBMongoDocumentInterface> {
        return new Promise((resolve, reject) => {
            reject(new VDBReadDataNotFoundException("not found"));
        });
    }
    public updateAll(...query: WriteUpdateObjectQueryInterface[]): Promise<VDBMongoDocumentInterface[]> {
        return new Promise((resolve, reject) => {
            reject(new VDBReadDataNotFoundException("not found"));
        });
    }
    public isConnected(): boolean {
        return this.isconnected;
    }
    protected giveModel() {
        return this.model;
    }
    private checkIfConnectedAndDo(doaction: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.isConnected()) {
                doaction();
            } else {
                return reject("Could not connect to DataBase");
            }
        });
    }
}
