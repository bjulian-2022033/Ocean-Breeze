'use strict'

import EventType from './eventType.model.js'

export const saveEventType = async (req, res) => {
    try {
        let data = req.body
        let eventType = new EventType(data)
        await eventType.save()

        return res.send({ message: `Registered successfully` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering Tipo Evento', err })
    }
}

//ACTUALIZAR
export const updateEventType = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updateEventType = await EventType.findByIdAndUpdate(id, data, {new: true})
        if(!updateEventType) return res.status(404).send({message: 'Event type not found'})
        return res.send({message: 'Event type update successfully | ',updateEventType})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for update Eventtype.'})
    }
}

//ELIMINAR
export const deletedEventType = async (req, res) => {
    try {
        let { id } = req.params
        let deletedEventType = await EventType.findOneAndDelete({ _id: id })
        if (!deletedEventType) return res.status(404).send({ message: 'Tipo Evento not found and not deleted' })
        return res.send({ message: ` Event with name ${deletedEventType.eventType} deleted sucessfully` })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error deleting Tipo Evento' })
    }
}

//MOSTRAR
export const getEventType = async () => {
    return EventType.find({});
};



//BUSCAR
/*
export const searchEventType = async (req, res) => {
    try {
        let { name } = req.body

        let nombre = await Evento.findOne({ name })

        return res.send(nombre)


    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error de buscar' })
    }
}
*/


