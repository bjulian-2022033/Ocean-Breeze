import express from 'express'
import {
    
    addEvent,
    deleteEvent,
    updateEvent
} from '../Event/event.controller.js'

const api = express.Router();

api.post('/addEvent', addEvent)
api.put('/updateEvent/:id', updateEvent)
api.delete('/deleteEvent/:id', deleteEvent)
api.get('/selectEventType', async (req, res) => {
    try {
        const users = await getEventType();
        res.send({ users });
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener  Eventos' });
    }
})



export default api