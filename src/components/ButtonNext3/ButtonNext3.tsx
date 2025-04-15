import { useNavigate } from "react-router"

const ButtonNext3 = () => {
    const navigate = useNavigate();

    const nextTrail = () => {
        navigate("/trilha-3")
    }

    return (
        <button onClick={nextTrail}>Ir para Trilha 3</button>
    );
}

export default ButtonNext3