import {VMongoDBService} from "./VMongoDBService";
import {Schema} from "mongoose";
import {WriteUpdateObjectQueryInterface} from "../../QueryObject/WriteUpdateObjectQueryInterface";

interface Colour {
    r: number;
    g: number;
    b: number;
}

interface Car {
    make: string;
    model: string;
    colour: Colour;
}

interface HouseDocument {
    _id?: string;
    name: string;

    cars?: Car[];
}

class House implements WriteUpdateObjectQueryInterface {
    public getUpdateQuery(): any {
        return {name: "nksncksnk"};
    }
    public getWriteQuery(): any {
        return {name: "nksncksnk"};
    }
}
const db = new VMongoDBService({database: 'prova'}, 'manager', new Schema({
                                                                    name: String,
}));
db.connect().then((value: any) => {
    console.log("Great");
    db.findById("5a7cb5cae7d79823b08adb5e").then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}, (error) => {
    console.log(error);
});
