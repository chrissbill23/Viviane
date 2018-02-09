
import {Users} from "./Users";
import {MongoWriteUpdateQueryObject} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoWriteUpdateQueryObject";
import {UserData} from "./UserData";

const db = new Users({database: 'prova'});
db.connect().then((value: any) => {
    console.log("Great");
    const adder = new MongoWriteUpdateQueryObject<UserData>({
                                                            name: 'prova1',
                                                            surname: 'prova1',
                                                            nickname: 'prova2'});
    db.addOne(adder).then((data) => {
        console.log(data.showName());
    }, (err) => {
        console.log(err);
    });
}, (error) => {
    console.log(error);
});
