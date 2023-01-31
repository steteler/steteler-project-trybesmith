import express from 'express';
import userController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin.middleware';

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, userController.getUserByName);

export default loginRouter;