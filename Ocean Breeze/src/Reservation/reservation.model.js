import {Schema, model} from 'mongoose'

export const reservationSchema = Schema ({
    room: {
        type: Schema.ObjectId,
        ref: 'room',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }

})

export default model ('reservation', reservationSchema)