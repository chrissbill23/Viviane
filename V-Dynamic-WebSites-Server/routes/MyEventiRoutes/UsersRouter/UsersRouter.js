"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersControllers_1 = require("../../../MyEventi/Controllers/UsersControllers");
exports.userRouter = express_1.Router();
exports.userRouter.get('/:userId', (req, res) => UsersControllers_1.userController.getUserInfo(req, res));
exports.userRouter.post('/adduser', (req, res) => UsersControllers_1.userController.addNewUser(req, res));
exports.userRouter.post('/addusers', (req, res) => UsersControllers_1.userController.addNewUsers(req, res));
exports.userRouter.post('/login', (req, res) => UsersControllers_1.userController.login(req, res));
exports.userRouter.post('/signup', (req, res) => UsersControllers_1.userController.addNewUser(req, res));
// userRouter.use((req, res, next) => userController.authenticate(req, res, next));
exports.userRouter.get('/', (req, res) => UsersControllers_1.userController.allUsers(req, res));
//# sourceMappingURL=UsersRouter.js.map