import logo from '../assets/img/logoHotel.png'

export const Logo = ({text}) => {
  return (
    <div>
      <img src={logo}/>
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}
