import "./NavBar.css";

const NavBar = () => {
    return ( 
        <>
            <header className="header">
                <h2 className="titulo">Exercício 5</h2>

                <div className="links">
                    <ul className="lista-links">
                        <li className="item-links">
                            <a href="/home">
                                Home
                            </a>
                        </li>
                        <li className="item-links">
                            <a href="/sobre">
                                Sobre
                            </a>
                        </li>
                        <li className="item-links">
                            <a href="/projeto">
                                Projeto
                            </a>
                        </li>
                        <li className="item-links">
                            <a href="/contato">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

        </>
    );
}

export default NavBar;