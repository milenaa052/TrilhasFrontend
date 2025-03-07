import "./Formulario.css";

const Formulario = () => {
    return (
        <div className="formulario">
            <form className="form">
                <div className="campos">
                    <label htmlFor="Email" className="label">Email</label>
                    <input type="email" className="input" name="email" id="email" />
                </div>

                <div className="campos">
                    <label htmlFor="senha" className="label">Senha</label>
                    <input type="password" className="input" name="senha" id="senha" />
                </div>

                <div className="submit">
                    <button className="enviar">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;