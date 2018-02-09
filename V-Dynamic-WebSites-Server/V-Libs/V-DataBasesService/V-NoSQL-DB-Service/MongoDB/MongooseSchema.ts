import {Schema, SchemaDefinition} from "mongoose";
import * as timestamp from "mongoose-timestamp";
/*const types = {
    stringType: 'string',
    numberType: 'number',
    dateType: 'date',
    bufferType: 'buffer',
    boolType: 'bool',
    mixedType: 'mixed',
    objectIdType: 'ObjectId',
    arrayType: 'array',
}
*/
export class MongooseSchema {
    private schema: Schema;
    constructor() {
        this.schema = new Schema();
    }
    public giveSchema(): Schema {
        return this.schema;
    }
    public defineNewProperty(property: SchemaDefinition): this {
        this.schema.add(property);
        return this;
    }
    public defineNewMethod(methodName: string, implementation: any): this {
        this.schema.methods[methodName] = implementation;
        return this;
    }
    public addTimeStamp(): this {
        this.schema.plugin(timestamp);
        return this;
    }
}
