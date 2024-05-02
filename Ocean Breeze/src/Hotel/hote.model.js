import { Schema, model } from 'mongoose'

const hotelSchema = Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    stars:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

export default model('hotel', hotelSchema)