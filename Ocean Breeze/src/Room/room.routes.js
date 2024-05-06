import { Router } from "express"
import { 
    addRoom,
    update, 
    listRooms, 
    deleteRoom, 
    search,
    listRoomsDisponibles,
    listRoomsOcupadas,
    listRoomsMantenimiento
} from "./room.controller.js"

const api = Router()

api.post('/addRoom', addRoom)
api.get('/listRooms', listRooms)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteRoom)
api.post('/search', search)
api.get('/listRoomsDisponibles', listRoomsDisponibles)
api.get('/listRoomsOcupadas', listRoomsOcupadas)
api.get('/listRoomsMantenimiento', listRoomsMantenimiento)

export default api