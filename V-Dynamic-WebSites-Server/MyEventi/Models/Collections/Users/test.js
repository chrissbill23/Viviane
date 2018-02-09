"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("./Users");
const MongoWriteUpdateQueryObject_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoWriteUpdateQueryObject");
const db = new Users_1.Users({ database: 'prova' });
db.connect().then((value) => {
    console.log("Great");
    const adder = new MongoWriteUpdateQueryObject_1.MongoWriteUpdateQueryObject({
        name: 'prova1',
        surname: 'prova1',
        nickname: 'prova2'
    });
    db.addOne(adder).then((data) => {
        console.log(data.showName());
    }, (err) => {
        console.log(err);
    });
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=test.js.map