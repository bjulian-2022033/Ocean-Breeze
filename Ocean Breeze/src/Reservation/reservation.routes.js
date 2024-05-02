import { Router } from 'express'

import 
{ addReservation, deleteReservation, listReservation, updateReservation } from './reservation.controller.js'

const api = Router()

api.post('/addReservation', addReservation)
api.put('/updateReservation', updateReservation)
api.delete('/deleteReservation', deleteReservation)
api.get('/listReservation', listReservation)

export default api