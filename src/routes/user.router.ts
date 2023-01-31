import express from 'express';
import userController from '../controllers/user.controller';
import validateUser from '../middlewares/validateUser.middleware';

const userRouter = express.Router();

userRouter.post('/', validateUser, userController.createUser);

export default userRouter;