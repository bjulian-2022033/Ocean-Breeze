import { Schema, model } from 'mongoose'

export const qualificationSchema = Schema({
    user:{
        type: String,
    },
    hotel:{
        type: Schema.ObjectId,
        ref: 'hotel',
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    qualification:{
        type: Number,
        required: true,
    }
})

export default model('qualification', qualificationSchema)