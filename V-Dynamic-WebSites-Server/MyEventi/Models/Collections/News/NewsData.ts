/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import { VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {
    Validator, VEnum,
    VGooseTypes,
    VProperty, VRefProperty,
    VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
const typeofNews = {
    type1: 'New Followers',
    type2: 'New Event',
    type3: 'New Participants',
};
@VSchema()
export class NewsData extends VDBMongoDocument {
    @VProperty({type: String, required: true})
    public content: string;
    @VEnum(typeofNews)
    public type: string;
    public getData(): any {
        return this.content;
    }
}
