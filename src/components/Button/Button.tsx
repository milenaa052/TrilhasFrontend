import "./Button.css";
import ButtonNext2 from "../ButtonNext2/ButtonNext2";
import Formulario from "../Form/Formulario";
import Gallery from "../Gallery/Gallery";
import ProfileCard from "../Profile/ProfileCard";

const Button = () => {
    return (
        <div>
            <button className="bntExercio1">Exercício 1</button>

            <ProfileCard />
            <Gallery />
            <Formulario />
            <ButtonNext2 />
        </div>
    );
}

export default Button;