import {Users} from "./Users";

const us = new Users();
us.connect().then((d) => {
    console.log(d);
});
