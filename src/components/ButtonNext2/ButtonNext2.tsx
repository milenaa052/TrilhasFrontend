import { useNavigate } from "react-router"

const ButtonNext2 = () => {
    const navigate = useNavigate();

    const nextTrail = () => {
        navigate("/trilha-2")
    }

    return (
        <button onClick={nextTrail}>Ir para Trilha 2</button>
    );
}

export default ButtonNext2