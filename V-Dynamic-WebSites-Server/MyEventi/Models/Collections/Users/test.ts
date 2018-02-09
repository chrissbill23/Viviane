import {connect, Mongoose, model, Schema, Model, default as mongoose} from "mongoose";
import {
    DataTypes,
    VMongooseCollection, VMongooseMethodProperty,
    VMongooseProperty,
} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongooseSchema";
import {VDBMongoDocumentInterface} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocumentInterface";

@VMongooseCollection("Greeter")
class Duck {
    @VMongooseProperty({type: String, required: false})
    public greeting: string;
    @VMongooseProperty({type: Date})
    public createdAt: Date;
    @VMongooseProperty({type: Date})
    public updatedAt: Date;
    public getModel(): any {
        return {};
    }
}
const mon = connect("mongodb://localhost/prova").then((mod) => {
    console.log("great");
    const modl = new Duck().getModel();
    const obj = new modl({ createdAt: new Date(), updatedAt: new Date()});
    obj.save().then((data: Duck) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});

