import { Router } from 'express'
import { addQualification, deleteQualification, test, updateQualification } from './qualification.controller.js'

const api = Router()

api.get('/test', test)
api.post('/addQualification', addQualification)
api.put('/updateQualification/:id', updateQualification)
api.delete('/deleteQualification/:id', deleteQualification)

export default api