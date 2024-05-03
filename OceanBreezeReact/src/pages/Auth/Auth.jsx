import habitacion from '../../assets/img/habitacionHotel.jpg'
import { Login } from '../../components/Login'
import './Auth.css'

export const Auth = () => {
  return (
    <div className='dashboard-main-auth'>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <img className="fond-homepage-auth" width='100%' height='100%' src={habitacion} alt="imagenHabitacion"/>
        <Login></Login>
    </div>
  )
}
