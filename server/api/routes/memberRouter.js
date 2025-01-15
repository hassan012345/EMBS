import { Router } from "express";
import createMember from "../controllers/memberController.js";

const memberRouter = new Router();

memberRouter.post('/', createMember);

export default memberRouter;