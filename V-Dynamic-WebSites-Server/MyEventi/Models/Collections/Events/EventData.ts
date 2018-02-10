import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {VProperty, VSchema} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";

@VSchema()
export class EventData extends VDBMongoDocument {
    @VProperty({type: Date})
    public dateAndTimeEv: Date;
    public getData(): any {
        return this.dateAndTimeEv;
    }
}
