"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersControllers_1 = require("../../MyEventi/Controllers/UsersControllers");
exports.myEventiRouter = express_1.Router();
exports.myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
exports.myEventiRouter.get('/user', (req, res) => UsersControllers_1.userController.allUsers(req, res));
exports.myEventiRouter.get('/user/:userId', (req, res) => UsersControllers_1.userController.getUserInfo(req, res));
exports.myEventiRouter.post('/user/adduser', (req, res) => UsersControllers_1.userController.addNewUser(req, res));
exports.myEventiRouter.post('/user/addusers', (req, res) => UsersControllers_1.userController.addNewUsers(req, res));
exports.myEventiRouter.post('/login', (req, res) => UsersControllers_1.userController.login(req, res));
//# sourceMappingURL=MyEventiRoutes.js.map