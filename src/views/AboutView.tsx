import { useNavigate } from "react-router-dom";

const AboutView = () => {
    const navigate = useNavigate();

    const goToHome = () =>{
        navigate("/");
    }

  return (
    <div>
      <p>Esta es la about view</p>
      <button onClick={goToHome}>Guardar</button>
    </div>
  );
};

export default AboutView;
