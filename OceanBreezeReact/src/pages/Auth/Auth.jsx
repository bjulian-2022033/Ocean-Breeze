import { Register } from "../../components/Register.jsx"
import { Login } from "../../components/Login.jsx"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import './Auth.css'

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const handleAuthPage = () => {
    setIsLogin(prev => !prev)
  }

  return (
    <>
      <div className="user-container">
        {
          isLogin ? (
            <Login switchUserhHandler={handleAuthPage}></Login>
          ) : (
            <Register switchUserhHandler={handleAuthPage}></Register>
          )
        }
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </>
  )
}