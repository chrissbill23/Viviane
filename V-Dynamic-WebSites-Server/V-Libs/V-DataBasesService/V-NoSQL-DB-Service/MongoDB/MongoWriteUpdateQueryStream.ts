import {WriteUpdateObjectQueryInterface} from "../../QueryObject/WriteUpdateObjectQueryInterface";
import {VDBMongoDocument} from "./VDBMongoDocument";

export class MongoWriteUpdateQueryStream<T extends VDBMongoDocument> implements WriteUpdateObjectQueryInterface {

    private entireQuery: {filter: any, values: any, options: any} = {filter: {}, values: {}, options: {runValidator: true}};
    private validateOnUpdate: boolean = true;
    constructor(values: any) {
        this.entireQuery.values = values;
    }
    public getUpdateQuery(): any {
        this.entireQuery.options.runValidator = this.validateOnUpdate;
        return this.entireQuery;
    }
    public getWriteQuery(): any {
        return this.entireQuery.values;
    }
    public match(value: any | T): this {
        this.entireQuery.filter = value;
        return this;
    }
    public setValue(value: any): this {
        this.entireQuery.values = value;
        return this;
    }
    public disableValidateOnUpdate(): this {
        this.validateOnUpdate = false;
        return this;
    }
}
