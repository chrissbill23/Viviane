"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const timestamp = require("mongoose-timestamp");
class MongooseSchemaStream {
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
exports.MongooseSchemaStream = MongooseSchemaStream;
//# sourceMappingURL=MongooseSchemaStream.js.map