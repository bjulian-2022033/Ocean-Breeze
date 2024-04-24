'use strict'

import jwt from 'jsonwebtoken'
import User from '../User/user.model.js'

export const validateJwt = async (req, res, next) => {
    try {
        let secretKey = process.env.SECRET_KEY
        let { token } = req.headers
        if(!token) return res.status(401).send({message: 'Unauthorized'})
        //obtener el uid que envió el token
        let { id } = jwt.verify(token, secretKey)
        let user = await User.findOne({_id: id})
        if(!user) return res.status(404).send({message: '  found - Unauthorized'})
        req.user = user
        next()
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error verifying token' })
    }
}

export const isAdmin = (req, res, next) => {
    try {
        let { role, username } = req.user
        if (!role || role !== 'ADMIN') return res.status(403).send({ message: `You dont have  | username ${username}` })
        next()
    } catch (err) {
        console.error(err)
        return res.status(400).send({ message: 'Unauthorized access | role' })
    }
}