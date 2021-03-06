"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MongoReadQueryBaseStream_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoReadQueryBaseStream");
class UsersReadQueryStream extends MongoReadQueryBaseStream_1.MongoReadQueryBaseStream {
    lookupForForllowers(newArrayNameToSaveIn) {
        return this.lookup("UserData", "followers", "_id", newArrayNameToSaveIn);
    }
    lookupForForllows(newArrayNameToSaveIn) {
        return this.lookup("UserData", "follows", "_id", newArrayNameToSaveIn);
    }
    lookupForNews(newArrayNameToSaveIn) {
        return this.lookup("NewsData", "news", "_id", newArrayNameToSaveIn);
    }
    lookupForEventsCreated(newArrayNameToSaveIn) {
        return this.lookup("EventData", "createdEvents", "_id", newArrayNameToSaveIn);
    }
    setWhereCondition(whereCondition) {
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
exports.UsersReadQueryStream = UsersReadQueryStream;
//# sourceMappingURL=UsersReadQueryStream.js.map