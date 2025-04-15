import { useState } from "react";
import "./Contador.css"
import Saudacao from "../Saudacao/Saudacao";
import ListaTarefas from "../ListaTarefas/ListaTarefas";
import ToggleVisibilidade from "../ToggleVisibilidade/ToggleVisibilidade";
import ButtonNext3 from "../ButtonNext3/ButtonNext3";

const Contador = ({ valorInicial = 0 }) => {
  const [contador, setContador] = useState(valorInicial);
  const tarefasIniciais = ["Estudar", "Jogar", "Trabalhar"];

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <>
        <div className="contador">
        <h2>Contador: {contador}</h2>
            <div className="botoes">
                <button className="decrementar" onClick={decrementar} >
                    Diminuir
                </button>

                <button className="incrementar" onClick={incrementar}>
                    Aumentar
                </button>
            </div>
        </div>

        <Saudacao nomeInicial="Milena" />
        <ListaTarefas tarefasIniciais={tarefasIniciais} />
        <ToggleVisibilidade texto="Texto visível ou ocultado" />
        <ButtonNext3 /> 
    </>
  );
};

export default Contador;