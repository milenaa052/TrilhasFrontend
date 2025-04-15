import { BrowserRouter as Router, Routes, Route } from "react-router"
import './App.css'
import ButtonNext1 from "./components/ButtonNext1/ButtonNext1"
import NavBar from './components/Navbar/NavBar'
import Contador from "./components/Contador/Contador"
import Home from "./components/Home"
import Button from "./components/Button/Button"
import About from "./components/About"
import Contact from "./components/Contact"
import Animal from "./components/Animal"

function App() {
  return (
    <>
    <NavBar />

      <Router>
        <Routes>
            <Route path="/" element={<ButtonNext1 />}></Route>

            <Route path="/trilha-1" element={<Button /> }></Route>

            <Route path="/trilha-2" element={<Contador valorInicial={5} />}></Route>

            <Route path="/trilha-3" element={<Home />}></Route>

            <Route path="/home" element={<Home />}></Route>

            <Route path="/sobre" element={<About />}></Route>

            <Route path="/contato" element={<Contact />}></Route>

            <Route path="/animal/:name" element={<Animal />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
