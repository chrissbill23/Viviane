"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("./VMongoDBService");
const mongoose_1 = require("mongoose");
class House {
    getUpdateQuery() {
        return { name: "nksncksnk" };
    }
    getWriteQuery() {
        return { name: "nksncksnk" };
    }
}
const db = new VMongoDBService_1.VMongoDBService({ database: 'prova' }, 'manager', new mongoose_1.Schema({
    name: String,
}));
db.connect().then((value) => {
    console.log("Great");
    db.findById("5a7cb5cae7d79823b08adb5e").then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=test.js.map