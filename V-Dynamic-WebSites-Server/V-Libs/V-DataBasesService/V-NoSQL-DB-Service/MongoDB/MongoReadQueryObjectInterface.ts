import {ReadQueryObjectInterface} from "../../QueryObject/ReadQueryObjectInterface";

export abstract class MongoReadQueryObjectInterface implements ReadQueryObjectInterface {
    private agregateQuery: any[];
    protected match(): void {
        const obj = {};
        for (const key in this) {
            if (this.hasOwnProperty(key) && this[key] != null && typeof this[key] != 'function') {
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
    public getQuery(): any {
        return this.agregateQuery;
    }
}
