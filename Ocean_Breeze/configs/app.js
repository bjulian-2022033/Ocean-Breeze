'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import { dbConnection } from './mongo.js'
import hotelRoutes from '../src/Hotel/hotel.routes.js'
import qualificationRoutes from '../src/Qualification/qualification.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/hotel', hotelRoutes)
app.use('/qualification', qualificationRoutes)

export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}