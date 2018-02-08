"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoReadQueryObjectInterface {
    match() {
        const obj = {};
        for (const key in this) {
            if (this.hasOwnProperty(key) && this[key] != null && typeof this[key] != 'function') {
                Object.defineProperty(obj, key, {
                    value: this[key],
                });
            }
        }
        this.agregateQuery.push({ $match: obj });
    }
    selectAttributes(...args) {
        if (args.length > 0) {
            const obj = {};
            for (const value of args) {
                if (this[value] != undefined) {
                    Object.defineProperty(obj, value, {
                        value: 1,
                    });
                }
                else {
                    Object.defineProperty(obj, value, {
                        value: 0,
                    });
                }
            }
            this.agregateQuery.push({ $project: obj });
        }
        return this;
    }
    getQuery() {
        return this.agregateQuery;
    }
}
exports.MongoReadQueryObjectInterface = MongoReadQueryObjectInterface;
//# sourceMappingURL=MongoReadQueryObjectInterface.js.map