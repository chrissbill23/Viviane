/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {Schema, SchemaDefinition, Model, model, SchemaTypeOpts} from "mongoose";
import * as timestamp from "mongoose-timestamp";

export class MongooseSchemaStream {
    private schema: Schema;
    constructor() {
        this.schema = new Schema();
    }
    public giveSchema(): Schema {
        return this.schema;
    }
    public defineNewProperty(property: SchemaDefinition): this {
        this.schema.add(property);
        return this;
    }
    public defineNewMethod(methodName: string, implementation: () => any): this {
        this.schema.methods[methodName] = implementation;
        return this;
    }
    public addTimeStamp(): this {
        this.schema.plugin(timestamp);
        return this;
    }
}
