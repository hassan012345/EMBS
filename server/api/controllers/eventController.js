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

const addEvent = async (req, res) => {
    const { name, description, happeningOn, sponsors } = req.body;
    try {
        const newEvent = new Event({
            name,
            description,
            happeningOn,
            sponsors
        });
        const savedEvent = await newEvent.save();
        res.status(201).json({ ...savedEvent._doc, happeningOn: new Date(savedEvent.happeningOn).toLocaleString() });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }

}

export { getAllEvents, getEventById, addEvent };