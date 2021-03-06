/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {
    VArrayProperty, VGooseTypes,
    VMethodProperty, VProperty,
    VSchema,
} from "../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {VDBMongoDocument} from "../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";

@VSchema()
export class CategEventData extends VDBMongoDocument {
    @VProperty({type: String, uppercase: true})
    public name: string;

    @VArrayProperty({type: VGooseTypes.String})
    public photos: string[];

    @VMethodProperty
    public getData(): any {
        return this;
    }
}
