import room from '../assets/img/room1.jpg'
import room1 from '../assets/img/room2.jpg'
import room2 from '../assets/img/room3.jpg'
import room3 from '../assets/img/room4.jpg'

export const Card = () => {
  return (
    <div className='room-card'>
        <div className="text-conotainer">
            <h3>Marina Wave Room</h3>
            <p>Descansa en esta habitación con temática marina, donde podrás escuchar el suave murmullo de las olas desde tu ventana.</p>
        </div>
        <img src={room2} alt='imagen de habitacion'/>
          <a><button className='information-button'>Mas Información</button></a>
    </div>
  )
}
