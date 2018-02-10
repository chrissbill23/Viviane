import {Configuration, VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {NewsData} from "./NewsData";

export class News extends VMongoDBService<NewsData> {
    constructor(databaseconnection: Configuration) {
        super(databaseconnection, new NewsData().getModel());
    }
}
