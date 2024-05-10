import fondoLogin from '../../assets/img/fondoLogin.png'
import { Navbar } from '../../components/Navbar.jsx'
import { AdminOption } from '../../components/AdminOption.jsx'
import './Admin.css'

export const Admin = () => {
  return (
    <div className='dashboard-main-admin'>
        <img src={fondoLogin} className='imgFondo'/>
        <br></br>
        <Navbar></Navbar>
        <AdminOption></AdminOption>
        <AdminOption></AdminOption>
        <AdminOption></AdminOption>
    </div>
  )
}
