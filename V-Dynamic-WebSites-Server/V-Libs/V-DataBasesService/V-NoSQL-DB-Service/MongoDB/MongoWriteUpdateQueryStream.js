"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class MongoWriteUpdateQueryStream {
    constructor(values) {
        this.entireQuery = { filter: {}, values: {}, options: { runValidator: true } };
        this.validateOnUpdate = true;
        this.entireQuery.values = values;
    }
    getUpdateQuery() {
        this.entireQuery.options.runValidator = this.validateOnUpdate;
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
    disableValidateOnUpdate() {
        this.validateOnUpdate = false;
        return this;
    }
}
exports.MongoWriteUpdateQueryStream = MongoWriteUpdateQueryStream;
//# sourceMappingURL=MongoWriteUpdateQueryStream.js.map