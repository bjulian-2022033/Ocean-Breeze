import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/User/user.routes.js'
import hotelRoutes from '../src/Hotel/hotel.routes.js'
import roomRoutes from '../src/Room/room.routes.js'
import serviceRoutes from '../src/Service/service.routes.js'
import eventTypeRoutes from '../src/EventType/eventType.routes.js'
import reservationRoutes from '../src/Reservation/reservation.routes.js'
import eventRoutes from '../src/Event/event.routes.js'
import facturaRoutes from '../src/Invoice/invoice.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200

//Configurar el servidor de express
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) 
app.use(helmet()) 
app.use(morgan('dev')) 

//Declaración de rutas
app.use('/user', userRoutes)
app.use('/hotel', hotelRoutes)
app.use('/room', roomRoutes)
app.use('/service', serviceRoutes)
app.use('/eventType', eventTypeRoutes)
app.use('/reservation',reservationRoutes)
app.use('/event', eventRoutes)
app.use('/factura', facturaRoutes)


//Levantar el servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}