/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {MongoReadQueryBaseStream} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoReadQueryBaseStream";
import {UserData} from "./UserData";

export class UsersReadQueryStream extends MongoReadQueryBaseStream {
    private name: string;
    private surname: string;
    private nickname: string;
    private password: string;
    private email: string;
    private isPremium: boolean;
    private isAdmin: boolean;
    private lastLogin: Date;
    private isBlocked: boolean;
    private reasonBlocked: string;

    public lookupForForllowers(newArrayNameToSaveIn: string): this {
        return this.lookup("UserData", "followers", "_id", newArrayNameToSaveIn);
    }
    public lookupForForllows(newArrayNameToSaveIn: string): this {
        return this.lookup("UserData", "follows", "_id", newArrayNameToSaveIn);
    }
    public lookupForNews(newArrayNameToSaveIn: string): this {
        return this.lookup("NewsData", "news", "_id", newArrayNameToSaveIn);
    }
    public lookupForEventsCreated(newArrayNameToSaveIn: string): this {
        return this.lookup("EventData", "createdEvents", "_id", newArrayNameToSaveIn);
    }
    public setWhereCondition(whereCondition: any): this {
        this.setId(whereCondition._id);
        this.name = whereCondition.name;
        this.surname = whereCondition.surname;
        this.nickname = whereCondition.surname;
        this.password = whereCondition.password;
        this.email = whereCondition.email;
        this.isPremium = whereCondition.isPremium;
        this.isAdmin = whereCondition.isAdmin;
        this.lastLogin = whereCondition.lastLogin;
        this.lastLogin = whereCondition.lastLogin;
        this.isBlocked = whereCondition.isBlocked;
        this.reasonBlocked = whereCondition.reasonBlocked;
        this.match();
        return this;
    }
}
