import { VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {
    VProperty,
    VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";

@VSchema()
export class NewsData extends VDBMongoDocument {
    @VProperty({type: String})
    public content: string;
    public getData(): any {
        return this.content;
    }
}
