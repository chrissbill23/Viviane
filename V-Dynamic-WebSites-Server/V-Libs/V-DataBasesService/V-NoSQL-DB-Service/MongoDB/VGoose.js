"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const timestamp = require("mongoose-timestamp");
function VSchema(timeStamp = true) {
    return (constructor) => {
        if (constructor.prototype.model == undefined) {
            if (constructor.prototype.schema == undefined) {
                constructor.prototype.schema = new mongoose_1.Schema();
            }
            if (timeStamp && constructor.prototype.schema.paths.createdAt) {
                constructor.prototype.schema.plugin(timestamp);
            }
            constructor.prototype.model = mongoose_1.model(constructor.name, constructor.prototype.schema);
        }
        return constructor;
    };
}
exports.VSchema = VSchema;
function VBeforeSave(parallel, fn) {
    return (constructor) => {
        if (constructor.prototype.schema == undefined) {
            constructor.prototype.schema = new mongoose_1.Schema();
        }
        constructor.prototype.schema.pre('save', parallel, fn);
        return constructor;
    };
}
exports.VBeforeSave = VBeforeSave;
function VIndexedProp(indType) {
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        const check = key != 'createdAt' && key != 'updatedAt' && key != '_id';
        if (check) {
            if (target.schema.path(key) === undefined) {
                const obj = {};
                obj[key] = { type: mongoose_1.Schema.Types.Mixed };
                target.schema.add(obj);
            }
            const obj2 = {};
            obj2[key] = indType;
            target.schema.index(obj2, { sparse: true });
        }
    };
}
exports.VIndexedProp = VIndexedProp;
function VProperty(prop) {
    if (prop.type == undefined) {
        throw new Error("Property type is requested");
    }
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        const check = key != 'createdAt' && key != 'updatedAt';
        if (check) {
            if (target.schema.path(key) === undefined) {
                const obj = {};
                obj[key] = prop;
                target.schema.add(obj);
            }
            else {
                target.schema.path(key, prop);
            }
        }
    };
}
exports.VProperty = VProperty;
function VEnum(Enum, options) {
    if (typeof Enum != 'object') {
        throw new Error("Enum property must be of type enum or object");
    }
    const value = Object.values(Enum);
    if (value.length == 0) {
        throw new Error("Enum property cannot be empty");
    }
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        if (options == undefined) {
            options = {};
        }
        options.type = mongoose_1.Schema.Types.Mixed;
        const check = key != 'createdAt' && key != 'updatedAt';
        if (check) {
            options.enum = value;
            if (target.schema.path(key) === undefined) {
                const obj = {};
                obj[key] = options;
                target.schema.add(obj);
            }
            else {
                target.schema.path(key, options);
            }
        }
    };
}
exports.VEnum = VEnum;
function Validator(validator, errorMessage) {
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        const check = key != 'createdAt' && key != 'updatedAt';
        if (check) {
            if (target.schema.path(key) === undefined) {
                const obj = {};
                obj[key] = { type: mongoose_1.Schema.Types.Mixed };
                target.schema.add(obj);
            }
            target.schema.path(key).validate(validator, errorMessage);
        }
    };
}
exports.Validator = Validator;
function VRefProperty(prop) {
    if (prop.type != undefined && prop.type != "objectId" /* ObjectId */) {
        throw new Error("references properties must be of type ObjectId");
    }
    if (prop.ref == undefined) {
        throw new Error("ref is required for reference property");
    }
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        if (prop.ref.name != target.name) {
            const reference = (new prop.ref());
            if (reference.getModel() == undefined && reference.getSchema() == undefined) {
                throw new Error("All references must be collections and subclasses of VMongooseDocument");
            }
        }
        const check = key != 'createdAt' && key != 'updatedAt';
        if (check) {
            if (target.schema.path(key) === undefined) {
                const obj = {};
                obj[key] = prop;
                obj[key].type = mongoose_1.Schema.Types.ObjectId;
                obj[key].ref = prop.ref.name;
                target.schema.add(obj);
            }
            else {
                const obj = prop;
                obj.type = mongoose_1.Schema.Types.ObjectId;
                obj.ref = prop.ref.name;
                target.schema.path(key, obj);
            }
        }
    };
}
exports.VRefProperty = VRefProperty;
function VArrayProperty(prop) {
    if (prop.type == "objectId" /* ObjectId */) {
        if (prop.ref == undefined) {
            throw new Error("ref is required for array of objectIds");
        }
    }
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        if (prop.ref != undefined && prop.ref.name != target.constructor.name) {
            const reference = (new prop.ref());
            if (reference.getModel() == undefined && reference.getSchema() == undefined) {
                throw new Error("All references must be collections and subclasses of VMongooseDocument");
            }
        }
        const check = key != 'createdAt' && key != 'updatedAt';
        if (check) {
            if (target.schema.path(key) === undefined) {
                target.schema.path(key, buildArraySchemaType(prop));
            }
        }
    };
}
exports.VArrayProperty = VArrayProperty;
function VMethodProperty(target, propertyKey, descriptor) {
    if (target.prototype != undefined) {
        throw new Error("Static class function cannot be declared as a method");
    }
    if (target.schema == undefined) {
        target.schema = new mongoose_1.Schema();
    }
    target.schema.methods[propertyKey] = descriptor.value;
    return descriptor;
}
exports.VMethodProperty = VMethodProperty;
function VStaticMethodProperty(target, propertyKey, descriptor) {
    if (target.prototype == undefined) {
        throw new Error("a method function cannot be declared as a static class function");
    }
    if (target.schema == undefined) {
        target.schema = new mongoose_1.Schema();
    }
    if (target.prototype.schema.statics[propertyKey] == undefined) {
        target.prototype.schema.statics[propertyKey] = descriptor.value;
    }
    return descriptor;
}
exports.VStaticMethodProperty = VStaticMethodProperty;
function buildArraySchemaType(prop) {
    let obj = prop;
    switch (obj.type) {
        case "objectId" /* ObjectId */:
            obj.type = mongoose_1.Schema.Types.ObjectId;
            break;
        case "string" /* String */:
            obj = { type: String };
            break;
        case "number" /* Number */:
            obj = { type: Number };
            break;
        case "date" /* Date */:
            obj = { type: Date };
            break;
        case "boolean" /* Boolean */:
            obj.type = Boolean;
            break;
        case "array" /* Array */:
            obj.type = Array;
            break;
        case "decimal" /* Decimal */:
            obj.type = mongoose_1.Schema.Types.Decimal128;
            break;
        case "mixed" /* Mixed */:
            obj.type = mongoose_1.Schema.Types.Mixed;
            break;
        case "buffer" /* Buffer */:
            obj.type = Buffer;
            break;
        case "embedded" /* Embedded */:
            obj.type = mongoose_1.Schema.Types.Embedded;
            break;
        case "documentarray" /* DocumentArray */:
            obj.type = mongoose_1.Schema.Types.DocumentArray;
            break;
        default: throw new Error("Array type not supported");
    }
    if (obj.ref != undefined) {
        obj.ref = obj.ref.name;
    }
    const ar = [];
    ar.push(obj);
    return ar;
}
//# sourceMappingURL=VGoose.js.map