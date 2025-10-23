import { useNavigate } from "react-router-dom";

const HomeOAVView = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const navegarTareaX = (Numero: number) => {
    navigate(`/tareasOAV/tarea${Numero}`);
  };

  return (
    <>
      <button onClick={goToHome}>Volver a Home</button>
      <h1>Tareas de Orlando AV</h1>
      <ul>
        <li>
          <button onClick={() => navegarTareaX(0)}>Ir a Tarea 0</button>
        </li>
        <li>
          <button onClick={() => navegarTareaX(1)}>Ir a Tarea 1</button>
        </li>
        <li>
          <button onClick={() => navegarTareaX(2)}>Ir a Tarea 2</button>
        </li>
      </ul>
    </>
  );
};

export default HomeOAVView;
