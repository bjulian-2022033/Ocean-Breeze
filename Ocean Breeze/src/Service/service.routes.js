import { Router } from "express"
import { addService, deleteService, listService, updateService } from "./service.controller.js"

const api = Router()

api.post('/addService', addService)
api.put('/updateService/:id', updateService)
api.delete('/deleteService/:id', deleteService)
api.get('/listService', listService)

export default api