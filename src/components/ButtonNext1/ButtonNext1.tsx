import { useNavigate } from "react-router"

const ButtonNext1 = () => {
    const navigate = useNavigate();

    const nextTrail = () => {
        navigate("/trilha-1")
    }

    return (
        <button onClick={nextTrail}>Ir para Trilha 1</button>
    );
}

export default ButtonNext1