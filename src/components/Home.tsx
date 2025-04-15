import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ButtonNextReserve from './ButtonNextReserve/ButtonNextReserve';


const Home = () => {
  const [animal, setAnimal] = useState('');
  const navigate = useNavigate();

  const buscarAnimal = (e: React.FormEvent) => {
    e.preventDefault()

    if (animal.trim()) {
      navigate(`/animal/${animal}`);
    }
  };

  const pagSobre = (e: React.FormEvent) => {
    e.preventDefault()
    
    navigate("/sobre");
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={buscarAnimal}>
        <input
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Digite o nome de um animal"
        />

        <button type="submit">Ver Animal</button>

        <br />
        <button onClick={pagSobre} style={{ margin: "50px" }}>Ir para a página sobre</button>

        <br />
        <ButtonNextReserve /> 
      </form>
    </div>
  );
};

export default Home;