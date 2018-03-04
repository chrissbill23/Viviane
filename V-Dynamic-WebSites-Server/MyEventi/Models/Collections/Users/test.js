"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("./Users");
const us = new Users_1.Users();
us.connect().then((d) => {
    console.log(d);
});
//# sourceMappingURL=test.js.map