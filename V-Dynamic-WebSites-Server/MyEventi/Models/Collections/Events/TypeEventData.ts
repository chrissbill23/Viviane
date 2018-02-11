import {VProperty, VSchema} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VGoose";
import {VDBMongoDocument} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";

@VSchema()
export class TypeEventData extends VDBMongoDocument {
  @VProperty({type: String, uppercase: true})
  public nome: string;
}
