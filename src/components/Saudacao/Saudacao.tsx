import { useState } from 'react';
import "./Saudacao.css"

const Saudacao = ({ nomeInicial = 'Usuário' }) => {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState('');

  const atualizarNome = () => {
    if (novoNome.trim() !== '') {
      setNome(novoNome);
      setNovoNome('');
    }
  };

  return (
    <div className="saudacao">
      <h2>Olá, {nome}!</h2>

      <div>
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Digite um novo nome"
          className="input"
        />

        <button className="atualizar" onClick={atualizarNome}>
          Atualizar
        </button>
      </div>
    </div>
  );
};

export default Saudacao;