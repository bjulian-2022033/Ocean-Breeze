import Qualification from './qualification.model.js'

export const test = (req, res)=>{
    res.send('Hello world')
}

export const addQualification = async(req, res)=>{
    try {
        let data = req.body
        if(!data) return res.status(404).send({message: 'Data not found.'})
        let qualification = new Qualification(data)
        await qualification.save()
        return res.send({message: 'Qualification saved successfully.'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for qualification hotel.'})
    }
}

export const updateQualification = async(req, res)=>{
    try {
        let { id } = req.params
        let data = req.body
        let qualificationUpdate = await Qualification.findByIdAndUpdate(id, data, {new: true})
        if(!qualificationUpdate) return res.status(404).send({message: 'Qualification not found'})
        return res.send({message: 'Qualification update successfully'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for qualification hotel.'})
    }
}

export const deleteQualification = async(req, res)=>{
    try {
        let { id } = req.params
        let data = req.body
        let qualification = await Qualification.findByIdAndDelete(id)
        if(!qualification) return res.status(404).send({message: 'Qualification not found'})
        return res.send({message: 'Qualification deleted successfully'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for delete qualification'})
    }
}