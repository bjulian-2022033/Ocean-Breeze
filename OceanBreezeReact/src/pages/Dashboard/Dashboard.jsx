import { Navbar } from "../../components/Navbar.jsx";
import { Sidebar } from "../../components/Sidebar.jsx";
import { RoomCard } from '../../components/RoomCard.jsx'
import { DashboardContent } from '../../components/DashboardContent.jsx'
import habitacion from '../../assets/img/habitacionHotel.jpg';
import room from '../../assets/img/logoHotel.png'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <img className="fond-homepage" width='100%' height='100%' src={habitacion} alt="imagenHabitacion"/>
      <RoomCard className="room-card-content"></RoomCard>
      <div className="welcome-box">
        <h1>Ocean Breeze</h1>
        <p>¡Bienvenido a Ocean Breeze Hotels!<br/><br/>
        Sumérgete en un mundo de lujo costero donde la serenidad del océano se combina con la elegancia contemporánea. En Ocean Breeze, cada uno de nuestros hoteles se erige como un santuario de relajación y sofisticación, ofreciendo a nuestros huéspedes una escapada inolvidable.
        <br/><br/>
        Déjate acunar por la suave brisa marina mientras disfrutas de nuestras impecables instalaciones, desde piscinas infinitas con vistas panorámicas hasta habitaciones elegantemente decoradas que te invitan a desconectar por completo.</p>
      </div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <DashboardContent></DashboardContent>
    </div>
  )
}
