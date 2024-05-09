import logo from '../assets/img/logoHotel.png'
import fondoLogin from '../assets/img/fondoLogin.png'

export const Logo = ({text}) => {
  return (
    <div>
      <img src={logo}/>
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}
