"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoWriteUpdateQueryObject {
    constructor(values) {
        this.entireQuery = { filter: {}, values: {} };
        this.entireQuery.values = values;
    }
    getUpdateQuery() {
        return this.entireQuery;
    }
    getWriteQuery() {
        return this.entireQuery.values;
    }
    match(value) {
        this.entireQuery.filter = value;
        return this;
    }
    setValue(value) {
        this.entireQuery.values = value;
        return this;
    }
}
exports.MongoWriteUpdateQueryObject = MongoWriteUpdateQueryObject;
//# sourceMappingURL=MongoWriteUpdateQueryObject.js.map