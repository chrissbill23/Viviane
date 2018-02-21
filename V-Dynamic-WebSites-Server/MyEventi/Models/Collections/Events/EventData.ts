/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {
    VArrayProperty, VBeforeSave,
    VGooseTypes, VProperty, VRefProperty,
    VSchema,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {TypeEventData} from "./Types/TypeEventData";
import {CategEventData} from "./Categ/CategEventData";

@VSchema()
@VBeforeSave(true, function(next, done) {
    next();
    this.tags = this.tags.map((x) => {
        return x.toUpperCase;
    });
    done();
})
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

    @VArrayProperty({type: VGooseTypes.String})
    public tags: string[];

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
