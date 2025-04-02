import React, { useState } from 'react';
import './ToggleVisibilidade.css';

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState<boolean>(false);

  const toggleVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="toggle">
      <button onClick={toggleVisibilidade} className="botao">
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      
      {visivel && (
        <div className="conteudo">
          {texto}
        </div>
      )}
    </div>
  );
};

export default ToggleVisibilidade;