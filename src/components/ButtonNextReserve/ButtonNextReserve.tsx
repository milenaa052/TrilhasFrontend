import { useNavigate } from "react-router"

const ButtonNextReserve = () => {
    const navigate = useNavigate();

    const nextTrail = () => {
        navigate("/HomeReservas")
    }

    return (
        <button onClick={nextTrail}>Ir para Reservas de Hotel</button>
    );
}

export default ButtonNextReserve