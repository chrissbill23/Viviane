import {Users} from "./Users";

const us = new Users({database: 'prova'});
us.connect().then((d) => {
    console.log(d);
});
