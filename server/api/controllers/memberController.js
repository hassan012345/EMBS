const createMember = async (req, res) => {
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

export default { createMember }