import {WriteUpdateObjectQueryInterface} from "../../QueryObject/WriteUpdateObjectQueryInterface";
import {VDBMongoDocumentInterface} from "./VDBMongoDocumentInterface";

export class MongoWriteUpdateQueryObject<T extends VDBMongoDocumentInterface> implements WriteUpdateObjectQueryInterface {

    private entireQuery = {filter: {}, values: {}};
    constructor(values: any) {
        this.entireQuery.values = values;
    }
    public getUpdateQuery(): any {
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
}
