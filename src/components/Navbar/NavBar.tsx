import Button from "../Button/Button";
import ButtonNext2 from "../ButtonNext2/ButtonNext2";
import Formulario from "../Form/Formulario";
import Gallery from "../Gallery/Gallery";
import ProfileCard from "../Profile/ProfileCard";
import "./NavBar.css";

const NavBar = () => {
    return ( 
        <>
            <header className="header">
                <h2 className="titulo">Exercício 5</h2>

                <div className="links">
                    <ul className="lista-links">
                        <li className="item-links">Home</li>
                        <li className="item-links">Sobre</li>
                        <li className="item-links">Projetos</li>
                        <li className="item-links">Contato</li>
                    </ul>
                </div>
            </header>

            <Button />
            <ProfileCard />
            <Gallery />
            <Formulario />
            <ButtonNext2 />
        </>
    );
}

export default NavBar;