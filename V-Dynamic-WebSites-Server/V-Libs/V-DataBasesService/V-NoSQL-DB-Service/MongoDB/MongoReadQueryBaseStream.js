"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoReadQueryBaseStream {
    match() {
        const obj = {};
        for (const key in this) {
            if (this.hasOwnProperty(key) && this[key] != null && this[key] != null && typeof this[key] != 'function') {
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
    limit(max) {
        if (max < 0) {
            max = 0;
        }
        this.agregateQuery.push({ $limit: max });
        return this;
    }
    skip(max) {
        if (max < 0) {
            max = 0;
        }
        this.agregateQuery.push({ $skip: max });
        return this;
    }
    sort(listOfSortedAttr) {
        for (const key in listOfSortedAttr) {
            if (this[key] != undefined && listOfSortedAttr[key] != -1 && listOfSortedAttr[key] != 1) {
                delete listOfSortedAttr[key];
            }
        }
        this.agregateQuery.push({ $sort: listOfSortedAttr });
        return this;
    }
    lookup(otherCollection, localField, foreignField, arrayName) {
        const obj = {
            $lookup: {
                from: otherCollection,
                as: arrayName,
                localField,
                foreignField,
            },
        };
        this.agregateQuery.push(obj);
        return this;
    }
    unwind(arrayName) {
        this.agregateQuery.push({
            $unwind: arrayName,
        });
        return this;
    }
    getQuery() {
        return this.agregateQuery;
    }
    groupBy(groupList) {
        this.agregateQuery.push(groupList);
        return this;
    }
    countDocuments(nameOfResult) {
        this.agregateQuery.push({ $count: nameOfResult });
        return this;
    }
    setId(id) {
        this._id = id;
    }
}
exports.MongoReadQueryBaseStream = MongoReadQueryBaseStream;
//# sourceMappingURL=MongoReadQueryBaseStream.js.map