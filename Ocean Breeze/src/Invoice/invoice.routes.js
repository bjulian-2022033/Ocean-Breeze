import express from 'express'
import { crearFactura,listInvoices } from './invoice.controller.js'

const api = express.Router()

api.post('/crearFactura', crearFactura)
api.get('/listInvoices', listInvoices)

export default api