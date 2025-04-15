import { useParams, useNavigate } from "react-router";
import rooms from "../../data/room";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id.toString() === id);

  if (!room) return <div>Quarto não encontrado</div>;

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <button onClick={() => navigate("/booking-success")}>Reservar</button>
    </div>
  );
};

export default RoomDetails;