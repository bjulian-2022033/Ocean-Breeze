import { Schema, model } from 'mongoose'

export const invoiceScehma = Schema ({
    event: {
        type: Schema.ObjectId,
        ref: 'event',
        required: true
    },
    room: {
        type: Schema.ObjectId,
        ref: 'room',
        required: true
    },
    reservation: {
        type: Schema.ObjectId,
        ref: 'reservation',
        required: true
    },
    services: [
        {
            type: Schema.ObjectId,
            ref: 'service'
        }
    ],
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    },
    total: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default model('invoice', invoiceScehma)