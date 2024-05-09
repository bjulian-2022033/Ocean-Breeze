import { useState } from 'react'
import { registerRequest } from '../../services/api.js'
import toast from 'react-hot-toast'

export const useRegister = () => {
    const [ isLoading, setIsLoading] = useState(false)
    const register = async(name, surname, email, username, password) => {
        setIsLoading(true)
        const user = {
            name,
            surname,
            email,
            username,
            password
        } 

        const response = await registerRequest(user)
        setIsLoading(false)
        if(response.error){
            if( response?.err.response?.data?.errors){
                for(const error of  response?.err.response?.data?.errors){
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                response?.err.response?.data?.msg || 
                response?.err?.data?.msg ||
                'Error al registrar el usuario, intenta de nuevo.'
            )
        }
        console.log(response)
        return toast.success('Usuario creado exitosamente')
    }
    
    return {
        register,
        isLoading
    }
}
