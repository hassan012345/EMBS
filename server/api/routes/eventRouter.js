import { Router } from "express";
import { getAllEvents, getEventById } from "../controllers/eventController.js";

const eventRouter = new Router();

eventRouter.post('/', getAllEvents);
eventRouter.post('/:id', getEventById);

export default eventRouter;