import "./NavBar.css";

const NavBarReservas = () => {
    return ( 
        <>
            <header className="header">
                <h2 className="titulo">Exercício 4 - Trilha 3</h2>

                <div className="links">
                    <ul className="lista-links">
                        <li className="item-links">
                            <a href="/homeReservas">
                                Home
                            </a>
                        </li>
                        <li className="item-links">
                            <a href="/rooms">
                                Room
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

        </>
    );
}

export default NavBarReservas;