/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {ReadQueryObjectInterface} from "../QueryObject/ReadQueryObjectInterface";
import {VDBDocumentInterface} from "../V-DataBaseDocument/VDBDocumentInterface";

export interface VNoSQLReadServiceInterface {
    findById(id: string): Promise<VDBDocumentInterface>;
    findAll(query: ReadQueryObjectInterface): Promise<VDBDocumentInterface[]>;
}
