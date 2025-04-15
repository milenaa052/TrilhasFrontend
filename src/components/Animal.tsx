import { useParams } from "react-router";


const Animal = () => {
  const { name } = useParams();
  
  return (
    <div>
      <h1>Animal: { name }</h1>
    </div>
  );
};

export default Animal;