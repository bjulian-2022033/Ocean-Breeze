import { Schema, model } from 'mongoose'


export const EventSchema = Schema({
    nameEvent: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    eventType: {
        type: Schema.ObjectId,
        ref: 'eventType',
        required: true
    }, 
    hotel: {
        type: Schema.ObjectId,
        ref: 'hotel',
        required: true
    }
})

export default model('event', EventSchema)