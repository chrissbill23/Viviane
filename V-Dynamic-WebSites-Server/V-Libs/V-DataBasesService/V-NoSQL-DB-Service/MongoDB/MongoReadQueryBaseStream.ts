/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {ReadQueryObjectInterface} from "../../QueryObject/ReadQueryObjectInterface";
import {VDBMongoDocument} from "./VDBMongoDocument";
import {isArray} from "util";

export abstract class MongoReadQueryBaseStream implements ReadQueryObjectInterface {
    private _id: string;
    private agregateQuery: any[] = [];
    protected match(): void {
        const obj: any = {};
        for (const key in this) {
            if (this.hasOwnProperty(key) && this[key] != null &&
                this[key] != undefined && key != 'agregateQuery' &&
                typeof this[key] != 'function') {
                    obj[key] = this[key];
            }
        }
        this.addMatch(obj);
    }
    public selectAttributes(args: string[]): this {
        if (args != undefined && args != null && args.length > 0) {
            const obj = {};
            for (const value of args) {
                obj[value] = 1;
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
    public getMatch(): any {
        for (const v of this.agregateQuery) {
            if (v.$match != undefined ) {
                return v.$match;
            }
        }
        return {};
    }
    public groupBy(groupList: any): this {
        this.agregateQuery.push(groupList);
        return this;
    }
    public countDocuments(nameOfResult: string): this {
        this.agregateQuery.push({$count: nameOfResult});
        return this;
    }
    public reset(): this {
        this.agregateQuery = [];
        return this;
    }
    public abstract setWhereCondition(whereCondition: VDBMongoDocument): this;
    public orCondition(args: any[]): this {
        if (args.length > 1) {
            this.addMatch({$or: args});
        }
        return this;
    }
    protected setId(id: string): void {
        this._id = id;
    }
    protected addMatch(obj: any) {
        for (const v of this.agregateQuery) {
            if (v.$match != undefined ) {
                Object.assign(v.$match, obj);
                return;
            }
        }
        this.agregateQuery.push({$match: obj});
    }
}
