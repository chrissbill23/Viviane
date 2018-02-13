/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {
    VArrayProperty,
    VGooseTypes, VProperty, VRefProperty,
    VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {TypeEventData} from "./TypeEventData";
import {CategEventData} from "./CategEventData";

@VSchema()
export class EventData extends VDBMongoDocument {
    @VProperty({type: Date})
    public dateAndTimeEv: Date;

    @VProperty({type: String})
    public createdBy: string;

    @VProperty({type: String})
    public title: string;

    @VProperty({type: String})
    public introduction: string;

    @VProperty({type: String})
    public fullDescription: string;

    @VRefProperty({ref: TypeEventData})
    public type: string;

    @VRefProperty({ref: CategEventData})
    public category: string;

    @VProperty({type: String, uppercase: true})
    public city: string;

    @VProperty({type: String})
    public tags: string;

    @VProperty({type: Boolean, default: false})
    public block: boolean;

    @VProperty({type: String, default: ''})
    public reasonBlock: string;

    @VArrayProperty({type: VGooseTypes.String})
    public fotos: string[];

    @VArrayProperty({type: VGooseTypes.String})
    public partecipants: string[];

    @VProperty({type: Boolean, default: false})
    public foreground: boolean;

    public getData(): any {
        return this.dateAndTimeEv;
    }
}
