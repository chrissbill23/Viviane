"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const NewsData_1 = require("./NewsData");
class News extends VMongoDBService_1.VMongoDBService {
    constructor(databaseconnection) {
        super(databaseconnection, NewsData_1.NewsData);
    }
}
exports.News = News;
//# sourceMappingURL=News.js.map