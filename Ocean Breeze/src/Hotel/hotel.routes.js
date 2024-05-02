import { Router } from "express";
import { deleteHotel, listHotel, saveHotel, test, updateHotel } from "./hotel.controller.js";

const api = Router()

api.get('/test', test)
api.post('/save', saveHotel)
api.put('/update/:id', updateHotel)
api.delete('/delete/:id', deleteHotel)
api.get('/list', listHotel)

export default api