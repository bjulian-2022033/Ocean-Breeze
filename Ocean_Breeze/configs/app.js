import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import hotelRoutes from '../src/Hotel/hotel.routes.js'
import roomRoutes from '../src/Room/room.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/hotel', hotelRoutes)
app.use('/room', roomRoutes)

export const initServer = () =>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}
