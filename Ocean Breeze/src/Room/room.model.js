import { Schema, model } from 'mongoose'

export const roomSchema = Schema({
    numberRoom: {
        type: Number,
        default: 0,
        required: [true, 'Room number is required']
    },
    description: {
        type: String,
        required: [true, 'The description is required']
    },
    ability: {
        type: Number,
        default:0
    },
    price: {
        type: Number,
        default: 0
    },
    state: {
        type: String,
        enum: ['Disponible','Ocupada', 'En mantenimiento'],
        default: 'Disponible'
    },
    availableDate:{
        type: Date
    },
    hotel: {
        type: Schema.ObjectId,
        ref: 'hotel',
        required: true
    }
})

export default model('room', roomSchema )