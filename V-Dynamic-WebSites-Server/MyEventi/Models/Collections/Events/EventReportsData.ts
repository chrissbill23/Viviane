/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {
    VProperty, VRefProperty,
    VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";

@VSchema()
export class EventReportsData extends VDBMongoDocument {
    @VProperty({type: String})
    public reason: string;
}
