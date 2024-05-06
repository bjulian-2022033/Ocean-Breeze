import habitacion from "../assets/img/habitacionHotel.jpg";
import room from "../assets/img/room1.jpg"
import room1 from '../assets/img/room2.jpg'
import room2 from '../assets/img/room3.jpg'
import room3 from '../assets/img/room4.jpg'

export const Habitacion = ({text}) => {
  return (
    <div>
        <img src={habitacion} alt="Habitacion" />
        <img src={room} alt="room"/>
        <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}