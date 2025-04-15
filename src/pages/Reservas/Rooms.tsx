import { Link } from "react-router";
import rooms from "../../data/room";

const Rooms = () => {
  return (
    <div>
      <h1>Lista de Quartos</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;