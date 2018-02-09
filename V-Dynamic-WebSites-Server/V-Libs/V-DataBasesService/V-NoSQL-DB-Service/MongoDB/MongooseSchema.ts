import {Schema, SchemaDefinition, Model, model, SchemaTypeOpts} from "mongoose";
import * as timestamp from "mongoose-timestamp";

export enum DataTypes {
    stringType = 'string',
    numberType = 'number',
    dateType = 'date',
    bufferType = 'buffer',
    boolType = 'boolean',
    mixedType = 'mixed',
    objectIdType = 'objectId',
    arrayType = 'array',
}
interface PropertyDefinition {
    type: SchemaTypeOpts<any>;
    defaultValue?: PropertyDefinition['type'];
}
export function VMongooseCollection(name: string) {
    return (constructor: any) => {
            if (constructor.prototype.schema == undefined) {
                constructor.prototype.schema = new Schema();
            }
            constructor.prototype.getModel =  () => {
            return model(name, constructor.prototype.schema);
        };
            return constructor;
    };
}
export function VMongooseProperty(prop: SchemaTypeOpts<any>) {
    return (target: any, key: string) => {
        if (target.schema == undefined) {
            target.schema = new Schema();
        }
        const obj = {};
        obj[key] = prop;
        target.schema.add(obj);
    };
}
export function VMongooseMethodProperty(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (target.schema == undefined) {
            target.schema = new Schema();
        }
        target.schema.methods[propertyKey] = descriptor.value;
        return descriptor;
}
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
    public defineNewMethod(methodName: string, implementation: () => any): this {
        this.schema.methods[methodName] = implementation;
        return this;
    }
    public addTimeStamp(): this {
        this.schema.plugin(timestamp);
        return this;
    }
}
