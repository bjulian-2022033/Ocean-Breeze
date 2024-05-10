import { Schema, model } from 'mongoose'

export const serviceSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    room :{
        type: Schema.ObjectId,
        ref: 'room',
        required: true
    }
})

export default model('service', serviceSchema)