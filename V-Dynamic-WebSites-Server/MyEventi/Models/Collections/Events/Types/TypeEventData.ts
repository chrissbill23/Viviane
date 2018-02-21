/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {
    VArrayProperty, VBeforeSave, VGooseTypes,
    VIndexedProp, VMethodProperty, VProperty,
    VSchema,
} from "../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {VDBMongoDocument} from "../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";

@VSchema()
export class TypeEventData extends VDBMongoDocument {
  @VProperty({type: String, uppercase: true, unique: true})
  @VIndexedProp(1)
  public name: string;
  @VArrayProperty({type: VGooseTypes.String})
  public photos: string[];
  @VMethodProperty
  public getData(): any {
      return {
          name: this.name,
      };
  }
}
