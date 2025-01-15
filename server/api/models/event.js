import mongoose from 'mongoose';
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    happeningOn:{
        type: Date,
        required: true
    },
    sponsors:[{
        type: String
    }]
})

const Event = mongoose.model('Event', eventSchema);
export default Event;