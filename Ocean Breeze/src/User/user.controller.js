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
                name: 'Bryan',
                surname: 'Julian ',
                username: 'bjulian',
                email: 'bjulian@kinal.edu.gt',
                password: '123456',
                phone: '12345678',
                role: 'ADMIN',
                state: 'true'
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
        return res.send({message: `Successful registration, Welcome ${user.name}` })
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

export const update = async (req, res) => {
    try {
        let data = req.body
        let uid = req.params.id
        let id = req.user._id
        if (id.toString() !== uid.toString()) return res.status(404).send({message:'You are not authorized to update another users password'})
        let update = checkUpdate(data, uid)
        if (!update) return res.status(400).send({ message: 'Could not update because data is missing' })
        let updatedUser = await User.findOneAndUpdate(
            { _id: uid },
            data,
            { new: true, }
        )
        if (!updatedUser) return res.status(401).send({ message: 'User not found and not updated' })
        return res.send({ message: 'User updated successfully', updatedUser })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating user' })
    }
}


export const deleteU = async (req, res) => {
    try {
        let id = req.user._id
        let userIdD = req.params.id
        let user = await User.findOne({ _id: userIdD })
        if (!user) return res.status(401).send({ message: 'User not found' })
        let { password } = req.body
        if (user && (await checkPassword(password, user.password))) {
            if (id.toString() !== userIdD.toString()) return res.status(404).send({message: 'You only can delete your user' })
            let deleteUser = await User.findOneAndDelete({ _id: userIdD })
            if (!deleteUser) return res.status(401).send({message: 'You are no  to remove another user.',})
            return res.send({message: `User ${deleteUser.username} deleted succesfully`,})
        }
        return res.status(404).send({ message: 'Password is not correct' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting user' })
    }
}

// ADMIN

export const registerAdmin = async (req, res) => {
    try {
        let data = req.body
        data.totalshopping = 0
        data.password = await encrypt(data.password)
        let existUser = await User.findOne({
            $or: [
                { username: data.username },
                { email: data.email }
            ],
        })
        if (existUser) return res.status(400).send({ message: 'User already exists' })
        let user = new User(data)
        await user.save()
        return res.send({ message: 'User created succesfully', username })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error creating administrator' })
    }
}

export const updateAdmin = async (req, res) => {
    try {
        let data = req.body
        let updateUser = req.params.id
        let userId = req.user._id
        let existingUser = await User.findOne({ _id: updateUser })
        if (existingUser.role == 'ADMIN' && updateUser != userId) return res.status(400).send({
            message:
                'You are not authorized to update another administrator',
        })
        if (data.password) await encrypt(data.password)
        let updatedUser = await User.findOneAndUpdate(
            { _id: updateUser },
            data,
            { new: true, }
        )
        if (!updatedUser)
            return res.status(401).send({ message: 'User not found and not updated' })
        return res.send({ message: 'User updated successfully', updatedUser })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating user' })
    }
}


export const deleteAdmin = async (req, res) => {
    try {
        let deletedUser = req.params.id
        let userId = req.user._id
        let existingUser = await User.findOne({ _id: deletedUser })
        if (existingUser.role === 'ADMIN' && userId != deletedUser) return res.status(400).send({message:'You are not authorized to remove another administrator'})
        let deleteUser = await User.findOneAndDelete({ _id: deletedUser })
        if (!deleteUser) return res.status(401).send({ message: 'User not found and not deleted' })
        return res.send({ message: `User ${existingUser.username} deleted successfully`, })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting administrator' })
    }
}