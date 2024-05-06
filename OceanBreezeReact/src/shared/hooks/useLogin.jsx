import { useState } from 'react'
import { loginRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useLogin = () => {
    const [ isLoading, setIsLoading] = useState(false)
    const login = async(email, password) => {
        setIsLoading(true)
        const user = {
            email,
            password
        } 

        const response = await loginRequest(user)
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
                'Error al intentar iniciar sesión'
            )
        }
        console.log(response)
    }
    
    return {
        login,
        isLoading
    }
}
