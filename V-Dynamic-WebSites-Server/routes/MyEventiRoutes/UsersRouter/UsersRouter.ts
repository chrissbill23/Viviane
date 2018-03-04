import {Router} from "express";
import {userController} from "../../../MyEventi/Controllers/UsersControllers";

export const userRouter = Router();

userRouter.get('/:userId', (req, res) => userController.getUserInfo(req, res));
userRouter.post('/adduser', (req, res) =>  userController.addNewUser(req, res));
userRouter.post('/addusers', (req, res) => userController.addNewUsers(req, res));
userRouter.post('/login', (req, res) => userController.login(req, res));
userRouter.post('/signup', (req, res) => userController.addNewUser(req, res));

// userRouter.use((req, res, next) => userController.authenticate(req, res, next));
userRouter.get('/', (req, res) => userController.allUsers(req, res));
