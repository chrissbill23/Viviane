import {
    VProperty, VRefProperty,
    VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {EventData} from "./EventData";

@VSchema()
export class EventReportsData extends VDBMongoDocument {
    @VRefProperty({ref: EventData})
    public eventConcerned: string;
    @VProperty({type: String})
    public reason: string;
}
