import {ReadQueryObjectInterface} from "../../QueryObject/ReadQueryObjectInterface";

export abstract class MongoReadQueryBaseStream implements ReadQueryObjectInterface {
    private _id: string;
    private agregateQuery: any[];
    protected match(): void {
        const obj = {};
        for (const key in this) {
            if (this.hasOwnProperty(key) && this[key] != null && this[key] != null && typeof this[key] != 'function') {
                    Object.defineProperty(obj, key, {
                        value: this[key],
                    });
            }
        }
        this.agregateQuery.push({$match: obj});
    }
    public selectAttributes(...args: string[]): this {
        if (args.length > 0) {
            const obj = {};
            for (const value of args) {
                if (this[value] != undefined) {
                        Object.defineProperty(obj, value, {
                            value: 1,
                        });
                } else {
                    Object.defineProperty(obj, value, {
                        value: 0,
                    });
                }
            }
            this.agregateQuery.push({$project: obj});
        }
        return this;
    }
    public limit(max: number): this {
        if (max < 0) {
            max = 0;
        }
        this.agregateQuery.push({$limit: max});
        return this;
    }
    public skip(max: number): this {
        if (max < 0) {
            max = 0;
        }
        this.agregateQuery.push({$skip: max});
        return this;
    }
    public sort(listOfSortedAttr: any): this {
        for (const key in listOfSortedAttr) {
            if (this[key] != undefined && listOfSortedAttr[key] != -1 && listOfSortedAttr[key] != 1 ) {
                delete listOfSortedAttr[key];
            }
        }
        this.agregateQuery.push({$sort: listOfSortedAttr});
        return this;
    }
    public lookup(otherCollection: string, localField: string,
                  foreignField: string, arrayName: string): this {
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
    public unwind(arrayName: string): this {
        this.agregateQuery.push({
            $unwind: arrayName,
        });
        return this;
    }
    public getQuery(): any {
        return this.agregateQuery;
    }
    public groupBy(groupList: any): this {
        this.agregateQuery.push(groupList);
        return this;
    }
    public countDocuments(nameOfResult: string): this {
        this.agregateQuery.push({$count: nameOfResult});
        return this;
    }
    protected setId(id: string): void {
        this._id = id;
    }
}
