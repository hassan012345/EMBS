import { Router } from "express";
import { getAllEvents, getEventById } from "../controllers/eventController.js";

const eventRouter = new Router();

eventRouter.get('/', getAllEvents);
eventRouter.post('/', addEvent);
eventRouter.post('/:id', getEventById);

export default eventRouter;