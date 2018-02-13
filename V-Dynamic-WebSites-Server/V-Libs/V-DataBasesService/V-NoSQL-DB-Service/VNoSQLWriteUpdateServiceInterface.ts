/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {WriteUpdateObjectQueryInterface} from "../QueryObject/WriteUpdateObjectQueryInterface";
import {VDBDocumentInterface} from "../V-DataBaseDocument/VDBDocumentInterface";

export interface VNoSQLWriteUpdateServiceInterface {
    addOne(query: WriteUpdateObjectQueryInterface): Promise<VDBDocumentInterface>;
    addAll(...query: WriteUpdateObjectQueryInterface[]): Promise<VDBDocumentInterface[]>;
    updateOne(query: WriteUpdateObjectQueryInterface): Promise<VDBDocumentInterface>;
    updateAll(...query: WriteUpdateObjectQueryInterface[]): Promise<VDBDocumentInterface[]>;
}
