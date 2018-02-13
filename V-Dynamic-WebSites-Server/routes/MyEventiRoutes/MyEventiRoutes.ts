import {Router} from "express";
import {userController} from "../../MyEventi/Controllers/UsersControllers";

export const myEventiRouter = Router();
myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
myEventiRouter.get('/user', (req, res) => userController.allUsers(req, res));
myEventiRouter.get('/user/:userId', (req, res) => userController.getUserInfo(req, res));
myEventiRouter.post('/user/adduser', (req, res) =>  userController.addNewUser(req, res));
myEventiRouter.post('/user/addusers', (req, res) => userController.addNewUsers(req, res));
myEventiRouter.post('/login', (req, res) => userController.login(req, res));
