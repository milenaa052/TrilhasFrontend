import { useNavigate } from "react-router"

const ButtonNext4 = () => {
    const navigate = useNavigate();

    const nextTrail = () => {
        navigate("/trilha-4")
    }

    return (
        <button onClick={nextTrail}>Ir para Trilha 4</button>
    );
}

export default ButtonNext4