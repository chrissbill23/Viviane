import {model, Schema, SchemaTypeOpts} from "mongoose";
import * as timestamp from "mongoose-timestamp";
import {VDBMongoDocument} from "./VDBMongoDocument";

interface VGooseClassParameter<T extends VDBMongoDocument> {
    new (): T;
}
export const enum VGooseTypes {
    String = 'string',
    Number = 'number',
    ObjectId = 'objectId',
    Date = 'date',
    Boolean = 'boolean',
    Decimal = 'decimal',
    Mixed = 'mixed',
    Buffer = 'buffer',
    Embedded = 'embedded',
    Array = 'array',
    DocumentArray = 'documentarray',
}
interface ArrayType<T extends VDBMongoDocument> {
    type: VGooseTypes;
    ref?: VGooseClassParameter<T>;
    require?: boolean;
}
export function VSchema(timeStamp: boolean = true) {
    return (constructor: any) => {
        if (constructor.prototype.model == undefined) {
            if (constructor.prototype.schema == undefined) {
                constructor.prototype.schema = new Schema();
            }
            constructor.prototype.model = model(constructor.name, constructor.prototype.schema);
            if (timeStamp && constructor.prototype.schema.paths.createdAt) {
                constructor.prototype.schema.plugin(timestamp);
            }
        }
        return constructor;
    };
}
export function VProperty(prop: SchemaTypeOpts<any>) {
    if (prop.type == undefined) {
        throw new Error("Property type is requested");
    }
    return (target: any, key: string) => {
        if (target.schema == undefined) {
            target.schema = new Schema();
        }
        const check: boolean = key != 'createdAt' && key != 'updatedAt';
        if (check && target.schema.path(key) === undefined) {
            const obj = {};
            obj[key] = prop;
            target.schema.add(obj);
        }
    };
}
export function VRefProperty<T extends VDBMongoDocument>(prop: {ref: VGooseClassParameter<T>} & SchemaTypeOpts<any> & any) {
    if (prop.type != VGooseTypes.ObjectId) {
        throw new Error("references properties must be of type ObjectId");
    }
    if (prop.ref == undefined) {
            throw new Error("ref is required for reference property");
        }
    return (target: any, key: string) => {
        if (prop.ref.name != target.name) {
            const reference = (new prop.ref()).getModel();
            if (reference === undefined) {
                throw new Error("All references must be collections and subclasses of VMongooseDocument");
            }
        }
        if (target.schema == undefined) {
            target.schema = new Schema();
        }
        const check: boolean = key != 'createdAt' && key != 'updatedAt';
        if (check && target.schema.path(key) === undefined) {
            const obj = {};
            obj[key] = prop;
            obj[key].type = Schema.Types.ObjectId;
            obj[key].ref =  prop.ref.name;
            target.schema.add(obj);
        }
    };
}
export function VArrayProperty<T extends VDBMongoDocument>(prop: ArrayType<T> & SchemaTypeOpts<any> & any) {
    if (prop.type == VGooseTypes.ObjectId) {
        if (prop.ref == undefined) {
            throw new Error("ref is required for array of objectIds");
        }
    }
    return (target: any, key: string) => {
        if (prop.ref.name != target.constructor.name) {
            const reference = (new prop.ref()).getModel();
            if (reference === undefined) {
                throw new Error("All references must be collections and subclasses of VMongooseDocument");
            }
        }
        if (target.schema == undefined) {
            target.schema = new Schema();
        }
        const check: boolean = key != 'createdAt' && key != 'updatedAt';
        if (check && target.schema.path(key) === undefined) {
            const obj = {};
            obj[key] = prop;
            target.schema.add(buildArraySchemaType(prop));
        }
    };
}
export function VMethodProperty(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (target.prototype != undefined) {
        throw new Error("Static class function cannot be declared as a method");
    }
    if (target.schema == undefined) {
        target.schema = new Schema();
    }
    if (target.schema.methods[propertyKey] == undefined) {
        target.schema.methods[propertyKey] = descriptor.value;
    }
    return descriptor;
}
export function VStaticMethodProperty<T>(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (target.prototype == undefined) {
        throw new Error("a method function cannot be declared as a static class function");
    }
    if (target.schema == undefined) {
        target.schema = new Schema();
    }
    if (target.prototype.schema.statics[propertyKey] == undefined) {
        target.prototype.schema.statics[propertyKey] = descriptor.value;
    }
    return descriptor;
}
function buildArraySchemaType<T extends VDBMongoDocument>(prop: ArrayType<T>): SchemaTypeOpts<any> {
    const obj: any = prop;
    switch (obj.type) {
        case VGooseTypes.ObjectId : obj.type = Schema.Types.ObjectId; break;
        case VGooseTypes.String : obj.type = String; break;
        case VGooseTypes.Number : obj.type = Number; break;
        case VGooseTypes.Date : obj.type = Date; break;
        case VGooseTypes.Boolean : obj.type = Boolean; break;
        case VGooseTypes.Array : obj.type = Array; break;
        case VGooseTypes.Decimal : obj.type = Schema.Types.Decimal128; break;
        case VGooseTypes.Mixed : obj.type = Schema.Types.Mixed; break;
        case VGooseTypes.Buffer : obj.type = Buffer; break;
        case VGooseTypes.Embedded : obj.type = Schema.Types.Embedded; break;
        case VGooseTypes.DocumentArray : obj.type = Schema.Types.DocumentArray; break;
        default: throw new Error("Array type not supported");

    }
    if (obj.ref != undefined) {
        obj.ref = obj.ref.name;
    }
    const ar: any[] = [];
    ar.push(obj);
    return ar;
}
