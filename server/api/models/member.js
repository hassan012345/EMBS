import mongoose from 'mongoose';
const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    designation: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
    },
    memberType: {
        type: String,
        enum: ['general,alumni']
    },
    followMe: {
        type: Boolean,
        required: true,
        default: false,
    }
})