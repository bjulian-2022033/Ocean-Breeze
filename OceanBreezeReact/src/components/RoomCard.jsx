import room from '../assets/img/room1.jpg'
import room1 from '../assets/img/room2.jpg'
import room2 from '../assets/img/room3.jpg'
import room3 from '../assets/img/room4.jpg'

export const RoomCard = () => {
  return (
    <div className='room-card-content'>
      <div className='slider-box'>
        <ul>
          <li>
            <img src={room} alt='room image' className='room-image'/>
            
          </li>
          <li>
            <img src={room1} alt='room image' className='room-image'/>
            
          </li>
          <li>
            <img src={room2} alt='room image' className='room-image'/>
            
          </li>
          <li>
            <img src={room3} alt='room image' className='room-image'/>
            
          </li>
        </ul>
      </div>
    </div>
  )
}
