'use strict'

import Event from './event.model.js'

export const addEvent = async (req, res) => {
    try {
        let data = req.body
        let event = new Event(data)
        await event.save()

        return res.send({ message: `Registered successfully` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering Evento', err })
    }
}

//ACTUALIZAR
export const updateEvent = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updateEvent = await Event.findByIdAndUpdate(id, data, {new: true})
        if(!updateEvent) return res.status(404).send({message: 'Event not found'})
        return res.send({message: 'Event update successfully | ',updateEvent})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for update Event.'})
    }
}

//ELIMINAR
export const deleteEvent = async (req, res) => {
    try {
        let { id } = req.params
        let deletedEvent = await Event.findOneAndDelete({ _id: id })
        if (!deletedEvent) return res.status(404).send({ message: ' Evento not found and not deleted' })
        return res.send({ message: ` Event with name ${deletedEvent.nombre} deleted sucessfully` })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error deleting  Evento' })
    }
}

//MOSTRAR
export const getEvents = async () => {
    return Event.find({});
}


//BUSCAR
export const searchEvent = async (req, res) => {
    try {
        let { name } = req.body
        let nombre = await Event.findOne({ name })
        return res.send(nombre)


    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error de buscar' })
    }
}


