/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {MongoReadQueryBaseStream} from "../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoReadQueryBaseStream";

export class TypeEventsReadQueryStream extends MongoReadQueryBaseStream {
    public name: Date;

    public setWhereCondition(whereCondition: any): this {
        this.setId(whereCondition._id);
        this.name = whereCondition.name;
        return this;
    }
}
