'use strict'

import Service from './service.model.js'


//ADD
export const addService = async (req, res) => {
    try {
        let data = req.body
        if (!data) return res.status(400).send({ message: ' Data not found' })
        let service = new Service(data)
        await service.save()
        return res.send({ message: 'Service save successfully' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error for register service'})
    }
}

export const updateService = async (req, res) =>{
    try {
        let { id } = req.params
        let data = req.body
        let updateService = await Service.findByIdAndUpdate(id, data, {new: true})
        if(!updateService) return res.status(404).send({message: 'Service not found'})
        return res.send({message: 'Service update successfully | ',updateService})
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for update Service.'})
        
    }
}

export const deleteService = async(req, res)=>{
    try {
        let { id } = req.params
        let deletedService = await Service.findByIdAndDelete(id)
        if(!deletedService) return res.status(404).send({message: 'Service not found'})
        return res.send({message: 'Service deleted successfully.'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for delete Service.'})
    }
}

export const listService = async(req, res)=>{
    try {
        const service = await Service.find()
        if(service.length === 0) return res.status(404).send({message: 'Service not found'})
        return res.send({message: 'Service found | ',service})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for list service.'})
    }
}