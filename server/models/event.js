import mongoose from 'mongoose';
const eventSchema = new mongoose.schema({
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
    sponsors:[
        
    ]
})