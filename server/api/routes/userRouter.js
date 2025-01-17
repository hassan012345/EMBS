import { Router } from "express";
import { signUp, signIn } from "../controllers/userController.js";

const userRouter = new Router();

userRouter.post('/signup', signUp);
userRouter.post('/signin', signIn);

export default userRouter;