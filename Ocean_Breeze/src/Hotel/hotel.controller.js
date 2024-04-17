import Hotel from './hote.model.js'

export const test = (req, res)=>{
    res.send('Hello world')
}

export const saveHotel = async(req, res)=>{
    try {
        let data = req.body
        if(!data) return res.status(404).send({message: 'Data not found'})
        let hotel = new Hotel(data)
        await hotel.save()
        return res.send({message: 'Hotel saved successfully.'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for register hotel.'})
    }
}

export const updateHotel = async(req, res)=>{
    try {
        let { id } = req.params
        let data = req.body
        let updateHotel = await Hotel.findByIdAndUpdate(id, data, {new: true})
        if(!updateHotel) return res.status(404).send({message: 'Hotel not found'})
        return res.send({message: 'Hotel update successfully | ',updateHotel})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for update hotel.'})
    }
}

export const deleteHotel = async(req, res)=>{
    try {
        let { id } = req.params
        let deletedHotel = await Hotel.findByIdAndDelete(id)
        if(!deleteHotel) return res.status(404).send({message: 'Hotel not found'})
        return res.send({message: 'Hotel deleted successfully.'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for delete hotel.'})
    }
}

export const listHotel = async(req, res)=>{
    try {
        const hotel = await Hotel.find()
        if(hotel.length === 0) return res.status(404).send({message: 'Hotels not found'})
        return res.send({message: 'Hotels found | ',hotel})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for list hotel.'})
    }
}