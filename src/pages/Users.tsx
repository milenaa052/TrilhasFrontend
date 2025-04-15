import axios from "axios";
import { useState } from "react";

const User = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [searchError, setSearchError] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [createMessage, setCreateMessage] = useState("");

  const handleSearch = async () => {
    setSearchError("");
    setUser(null);

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = response.data;

      if (!data) {
        throw new Error("Usuário não encontrado");
      }

      setUser(data);

    } catch (error) {
      setSearchError("Erro ao buscar usuário");
      console.error(error);
    }
  };

  const handleCreateUser = async () => {
    setCreateMessage("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: newName,
          email: newEmail,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = response.data;

      setCreateMessage(`Usuário "${data.name}" cadastrado com sucesso!`);
      setNewName("");
      setNewEmail("");

    } catch (error) {
      setCreateMessage("Erro ao cadastrar usuário");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Buscar Usuário pelo ID</h2>
      <input
        type="text"
        placeholder="Digite o ID do usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {user && (
        <div>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      {searchError && <p style={{ color: "red" }}>{searchError}</p>}

      <hr />

      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />

      <br />

      <button onClick={handleCreateUser}>Cadastrar</button>

      {createMessage && <p>{createMessage}</p>}
    </div>
  );
};

export default User;