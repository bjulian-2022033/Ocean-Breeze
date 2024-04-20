'use strict'

import User from "./user.model.js"
import { encrypt,checkPassword, checkUpdate }  from "../utils/validator.js"
import { generateJwt } from "../utils/jwt.js"



export const TEST = async(req, res)=>{
    console.log('Prueba de conexion ')
}

export const ADMIN = async(req,res)=>{
    try {
        let defaultADMIN = await User.findOne({ username: 'bjulian'})
        if (!defaultADMIN) {
            let data = {
                email: 'bjulian@gmail.com',
                username: 'bjulian',
                password: '12345',
                role: 'ADMIN'
            }
            data.password = await encrypt(data.password)
            let user = new User(data)
            await user.save()
        }
    } catch (err) {
        console.error(err)
        return res.status(404).send({message:' Error '})
    }
}

export const register = async(req,res)=>{
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'CLIENT'
        let user = new User(data)
        await user.save()
        return res.send({message: `Successful registration, Welcome ${user.username}` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error registerin user', err})
    }
}

export const login = async(req,res)=>{
    try {
        let {email, username, password} = req.body
        let user = await User.findOne({$or:[{username: username},{email: email}]})
        if(user && await checkPassword(password, user.password)){
            let loggedUser = {
                id: user._id,
                username: user.username,
                role: user.role
            }
            let token = await generateJwt(loggedUser)
            return res.send(
                {
                    message: `Welcome ${user.username}`,
                    loggedUser,
                    token,
                }
            )
        }        
        return res.status(404).send({message: 'Credenciales invalidas' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Failed to login'})
    }
}

export const update = async(req, res)=>{ 
    try{
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have sumbmitted some data that cannot be updated or missing data'})
        let updatedUser = await User.findOneAndUpdate(
            {_id: id}, 
            data, 
            {new: true}
        )
        if(!updatedUser) return res.status(401).send({message: 'User not found and not updated'})
        return res.send({message: 'Updated user', updatedUser})
    }catch(err){
        console.error(err)
        if(err.keyValue.username) return res.status(400).send({message: `Username ${err.keyValue.username} is already taken`})
        return res.status(500).send({message: 'Error updating account'})
    }
}

export const deleteU = async(req, res)=>{
    try{
        let { id } = req.params
        let deletedUser = await User.findOneAndDelete({_id: id})
        if(!deletedUser) return res.status(404).send({message: 'Account not found and not deleted'})
        return res.send({message: `Account with username ${deletedUser.username} deleted successfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting account'})
    }
}