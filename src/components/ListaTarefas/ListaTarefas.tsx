import { useState } from 'react';
import './ListaTarefas.css';

interface ListaTarefasProps {
    tarefasIniciais?: string[];
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefasIniciais = [] }) => {
    const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
    const [novaTarefa, setNovaTarefa] = useState<string>('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      adicionarTarefa();
    }
  };

  return (
    <div className="lista-tarefas">
      <h2 className="titulo">Lista de Tarefas</h2>
      
      <div className="input-container">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma nova tarefa"
          className="input"
        />

        <button onClick={adicionarTarefa} className="botao">
          Adicionar
        </button>
      </div>

      <ul className="ul">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="li">
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;