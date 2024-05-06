import { Schema, model } from 'mongoose'

const eventTypeSchema = Schema({
    eventType: {
        type: String,
        required: true
    }
})

export default model('eventType', eventTypeSchema)