'use strict'

import Reservation from './reservation.model.js'

export const addReservation = async (req, res) =>{
    try {
        let data = req.body
        if (!data) return res.status(400).send({ message: ' Data not found' })
        let reservation = new Reservation(data)
        await reservation.save()
        return res.send({ message: 'Reservation save successfully' })
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error for register reservation'})
    }
}

export const updateReservation = async (req, res) =>{
    try {
        let { id } = req.params
        let data = req.body
        let updateReservation = await Reservation.findByIdAndUpdate(id, data, {new: true})
        if(!updateReservation) return res.status(404).send({message: 'Reservation not found'})
        return res.send({message: 'Reservation update successfully | ',updateReservation})

    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for update Reservation.'})
    }
}

export const deleteReservation = async(req, res) => {
    try {

        let { id } = req.params
        let deleteReservation = await Reservation.findByIdAndDelete(id)
        if (!deleteReservation) return res.status(404).send({ meesage: ' Reservation not found'})
        return res.send({message: 'Reservation delete successfully'})
        
    } catch (err) {

        console.error(err)
        return res.status(500).send({message: 'Error for delete Reservation'})
        
    }
}

export const listReservation = async (req, res) =>{
    try {
        const Reservation = await Reservation.find()
        if(reservation.length === 0) return res.status(404).send({ message: ' Reservation not found'})
        return res.send({message: 'Reservation found | ', reservation})
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error for list reservation'})
        
    }
}