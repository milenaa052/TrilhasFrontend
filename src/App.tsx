import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router"
import ButtonNext1 from "./components/ButtonNext1/ButtonNext1"
import NavBar from './components/Navbar/NavBar'
import NavBarReservas from './components/Navbar/NavBarReservas'
import Contador from "./components/Contador/Contador"
import Home from "./components/Home"
import Button from "./components/Button/Button"
import About from "./components/About"
import Contact from "./components/Contact"
import Animal from "./components/Animal"
import HomeReservas from "./pages/Reservas/HomeReservas"
import Rooms from "./pages/Reservas/Rooms"
import RoomDetails from "./pages/Reservas/RoomDetails"
import BookingSuccess from "./pages/Reservas/BookingSucess"

function Layout() {
  const location = useLocation();

  const isReservaPath = 
    location.pathname.startsWith("/HomeReservas") ||
    location.pathname.startsWith("/rooms") ||
    location.pathname.startsWith("/booking-success");

  return (
    <>
      {isReservaPath ? <NavBarReservas /> : <NavBar />}
      <Routes>
        <Route path="/" element={<ButtonNext1 />} />
        <Route path="/trilha-1" element={<Button />} />
        <Route path="/trilha-2" element={<Contador valorInicial={5} />} />
        <Route path="/trilha-3" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />

        <Route path="/HomeReservas" element={<HomeReservas />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;