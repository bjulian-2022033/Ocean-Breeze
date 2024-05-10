import logo from '../assets/img/logoHotel.png'

export const Navbar = () => {
  return (
    <header className='Navbar'>
      <a href='../dashboard' className="contenedor-logo">
        <img className='logo-hotel' src={logo}/>
        <h2>Ocean Breeze</h2>
      </a>
      <nav className="content">
        <a href="" className="options">Account</a>
        <a href="" className="options">Logout</a>
        <a href="" className="options">Login</a>
      </nav>
    </header>
  )
}
