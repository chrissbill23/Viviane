/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {Configuration, VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {NewsData} from "./NewsData";

export class News extends VMongoDBService<NewsData> {
    constructor(databaseconnection: Configuration) {
        super(databaseconnection, NewsData);
    }
}
