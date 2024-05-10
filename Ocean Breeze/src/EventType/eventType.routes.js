import express from 'express'

import {
    saveEventType,
    updateEventType,
    deletedEventType,
    getEventType
} from '../EventType/eventType.controller.js';

const api = express.Router();

api.post('/saveEventType', saveEventType)
api.put('/updateEventType/:id', updateEventType)
api.delete('/deleteEventType/:id', deletedEventType)
api.get('/selectEventType', async (req, res) => {
    try {
        const users = await getEventType();
        res.send({ users });
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener  Eventos' });
    }
});



export default api