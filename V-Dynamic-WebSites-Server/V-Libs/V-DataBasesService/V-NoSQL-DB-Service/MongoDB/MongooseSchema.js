"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const timestamp = require("mongoose-timestamp");
var DataTypes;
(function (DataTypes) {
    DataTypes["stringType"] = "string";
    DataTypes["numberType"] = "number";
    DataTypes["dateType"] = "date";
    DataTypes["bufferType"] = "buffer";
    DataTypes["boolType"] = "boolean";
    DataTypes["mixedType"] = "mixed";
    DataTypes["objectIdType"] = "objectId";
    DataTypes["arrayType"] = "array";
})(DataTypes = exports.DataTypes || (exports.DataTypes = {}));
function VMongooseCollection(name) {
    return (constructor) => {
        if (constructor.prototype.schema == undefined) {
            constructor.prototype.schema = new mongoose_1.Schema();
        }
        constructor.prototype.getModel = () => {
            return mongoose_1.model(name, constructor.prototype.schema);
        };
        return constructor;
    };
}
exports.VMongooseCollection = VMongooseCollection;
function VMongooseProperty(prop) {
    return (target, key) => {
        if (target.schema == undefined) {
            target.schema = new mongoose_1.Schema();
        }
        const obj = {};
        obj[key] = prop;
        target.schema.add(obj);
    };
}
exports.VMongooseProperty = VMongooseProperty;
function VMongooseMethodProperty(target, propertyKey, descriptor) {
    if (target.schema == undefined) {
        target.schema = new mongoose_1.Schema();
    }
    target.schema.methods[propertyKey] = descriptor.value;
    return descriptor;
}
exports.VMongooseMethodProperty = VMongooseMethodProperty;
class MongooseSchema {
    constructor() {
        this.schema = new mongoose_1.Schema();
    }
    giveSchema() {
        return this.schema;
    }
    defineNewProperty(property) {
        this.schema.add(property);
        return this;
    }
    defineNewMethod(methodName, implementation) {
        this.schema.methods[methodName] = implementation;
        return this;
    }
    addTimeStamp() {
        this.schema.plugin(timestamp);
        return this;
    }
}
exports.MongooseSchema = MongooseSchema;
//# sourceMappingURL=MongooseSchema.js.map