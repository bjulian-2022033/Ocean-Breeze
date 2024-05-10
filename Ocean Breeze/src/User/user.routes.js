import express from 'express'
import {register, login, update, deleteU, registerAdmin, updateAdmin, deleteAdmin } from './user.controller.js'
import { isAdmin, validateJwt  } from '../middlewares/validate-jwt.js'

const api = express.Router()

//CLIENT
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id',[validateJwt], update)
api.delete('/deleteU/:id',[validateJwt], deleteU)

//ADMIN
api.post('/registerAdmin', [validateJwt, isAdmin], registerAdmin)
api.put('/updateAdmin/:id', [validateJwt, isAdmin], updateAdmin)
api.delete('/deleteAdmin/:id',[validateJwt, isAdmin], deleteAdmin)



export default api 