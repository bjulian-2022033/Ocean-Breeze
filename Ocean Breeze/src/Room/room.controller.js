'use strict'

import Room from './room.model.js'
import Hotel from '../Hotel/hote.model.js'

//ADD 
export const addRoom = async (req, res) => {
    try {
        let data = req.body
        //Validamos si el numero de la habitacion existe en DB
        let roomExist = await Room.findOne({ numberRoom: data.numberRoom })
        if (roomExist) {
            return res.status(400).send({ msg: `The number ${roomExist.numberRoom} room already exists in the database` })
        }

        let hotel = await Hotel.findOne({ _id: data.hotel })
        if (!hotel) {
            return res.status(404).send({ msg: 'Hotel not found' })
        }
        let room = new Room(data)
        await room.save()
        return res.status(201).send({ msg: 'Room added successfully' })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error added room' })
    }
}

//TO LIST
export const listRooms = async (req, res) => {
    try {
        let listRooms = await Room.find().populate('hotel', ['name', '-_id']).select('-__v')
        if (listRooms.length === 0) {
            return res.status(404).send({ msg: 'Not found' })
        }
        return res.status(200).send({ msg: 'The rooms are: ', listRooms })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error getting rooms' })
    }
}

//TO LIST DISPONIBLE
export const listRoomsDisponibles = async (req, res) => {
    try {
        let roomsDisponibles = await Room.find({ state: 'Disponible' })
            .populate('hotel', ['name', '-_id']).select('-__v')
        if (roomsDisponibles.length === 0) {
            return res.status(404).send({ msg: 'No rooms available.' })
        }
        return res.status(200).send({ msg: 'The available rooms are:', roomsDisponibles })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error getting rooms' })
    }
}

//TO LIST OCUPADO
export const listRoomsOcupadas = async (req, res) => {
    try {
        let roomsOcupadas = await Room.find({ state: 'Ocupada' })
            .populate('hotel', ['name', '-_id']).select('-__v')
        if (roomsOcupadas.length === 0) {
            return res.status(404).send({ msg: 'There are no occupied rooms' })
        }
        return res.status(200).send({ msg: 'The occupied rooms are:', roomsOcupadas })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error getting rooms' })
    }
}

//TO LIST EN MANTENIMIENTO
export const listRoomsMantenimiento = async (req, res) => {
    try {
        let roomsMantenimiento = await Room.find({ state: 'En mantenimiento' })
            .populate('hotel', ['name', '-_id']).select('-__v')
        if (roomsMantenimiento.length === 0) {
            return res.status(404).send({ msg: 'There are no rooms under maintenance' })
        }
        return res.status(200).send({ msg: 'The rooms under maintenance are:', roomsMantenimiento })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error getting rooms' })
    }
}

//UPDATE
export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updateRoom = await Room.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        ).populate('hotel', ['name', '-_id']).select('-__v')
        if (!updateRoom) {
            return res.status(404).send({ msg: 'Room not found and not updated' })
        }
        return res.status(200).send({ msg: 'Updated Room ', updateRoom })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error updated room' })
    }
}

//DELETE 
export const deleteRoom = async (req, res) => {
    try {
        let { id } = req.params
        let deleteRo = await Room.findOneAndDelete({ _id: id })
        if (!deleteRo) {
            return res.status(404).send({ msg: 'Room not found and not deleted' })
        }

        const roomNumber = deleteRo.numberRoom

        return res.status(200).send({ msg: `Room number ${roomNumber} deleted successfully` })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error deleting room' })
    }
}

//SEARCH
export const search = async (req, res) => {
    try {
        let { search } = req.body
        let room = await Room.findOne({ numberRoom: search })
            .populate('hotel', ['name', '-_id']).select('-__v')
        if (!room) {
            return res.status(404).send({ msg: 'Room not found' })
        }
        return res.send({ msg: 'Room found', room })
    } catch (e) {
        console.error(e)
        return res.status(500).send({ msg: 'Error searching room' })
    }
}