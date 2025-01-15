import Event from '../models/event.js';

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { getAllEvents, getEventById };