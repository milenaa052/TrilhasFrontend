import { BrowserRouter as Router, Routes, Route } from "react-router"
import './App.css'
import ButtonNext1 from "./components/ButtonNext1/ButtonNext1"
import NavBar from './components/Navbar/NavBar'
import Contador from "./components/Contador/Contador"

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<ButtonNext1 />}></Route>

            <Route path="/trilha-1" element={<NavBar /> }></Route>

            <Route path="/trilha-2" element={<Contador valorInicial={5} />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
