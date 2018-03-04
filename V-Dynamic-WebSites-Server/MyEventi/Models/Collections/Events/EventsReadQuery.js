"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MongoReadQueryBaseStream_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoReadQueryBaseStream");
class EventsReadQuery extends MongoReadQueryBaseStream_1.MongoReadQueryBaseStream {
    lookupForParticipants(newArrayNameToSaveIn) {
        return this.lookup("UserData", "partecipants", "_id", newArrayNameToSaveIn);
    }
    lookupForReports(newArrayNameToSaveIn) {
        return this.lookup('EventData', 'reports', '_id', newArrayNameToSaveIn);
    }
    setWhereCondition(whereCondition) {
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
    hasTags(...tags) {
        const tags2 = tags.map((x) => {
            return x.toUpperCase;
        });
        this.tags = { tags: { $all: tags2 } };
        this.addMatch(this.tags);
        return this;
    }
}
exports.EventsReadQuery = EventsReadQuery;
//# sourceMappingURL=EventsReadQuery.js.map