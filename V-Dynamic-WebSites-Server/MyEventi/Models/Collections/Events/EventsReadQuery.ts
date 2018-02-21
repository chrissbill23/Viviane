/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {MongoReadQueryBaseStream} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoReadQueryBaseStream";

export class EventsReadQuery extends MongoReadQueryBaseStream {
    public dateAndTimeEv: Date;
    public createdBy: string;
    public title: string;
    public introduction: string;
    public fullDescription: string;
    public type: string;
    public category: string;
    public city: string;
    public tags: any;
    public block: boolean;
    public reasonBlock: string;
    public fotos: string[];
    public partecipants: string[];
    public foreground: boolean;

    public lookupForParticipants(newArrayNameToSaveIn: string): this {
        return this.lookup("UserData", "partecipants", "_id", newArrayNameToSaveIn);
    }
    public setWhereCondition(whereCondition: any): this {
        this.setId(whereCondition._id);
        this.dateAndTimeEv = whereCondition.dateAndTimeEv;
        this.createdBy = whereCondition.createdBy;
        this.title = whereCondition.title;
        this.introduction = whereCondition.introduction;
        this.fullDescription = whereCondition.fullDescription;
        this.type = whereCondition.type;
        this.category = whereCondition.category;
        this.city = whereCondition.city;
        this.block = whereCondition.block;
        this.reasonBlock = whereCondition.reasonBlocked;
        this.foreground = whereCondition.foreground;
        this.match();
        return this;
    }
    public hasTags(...tags: string[]): this {
       const tags2 = tags.map((x) => {
                return x.toUpperCase;
       });
       this.tags = {tags: {$all: tags2}};
       this.addMatch(this.tags);
       return this;
    }
}
