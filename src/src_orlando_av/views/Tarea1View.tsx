import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Clase4 = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState<number>(1);
  const [numero, setNumero] = useState<number>(1);
  const [Revisado, setRevisado] = useState<boolean>(false);

  function multiplicar() {
    setCount(count * numero);
    console.log(count);
  }

  const dividir = () => {
    setCount(count / numero);
  }

  const reset = () => {
    setCount(1);
    setNumero(1);
  }

  const volverTareasOAV = () =>{
    navigate("/tareasOAV");
  }
  const navegarTareaX = (Numero: number) => {
      navigate(`/tareasOAV/tarea${Numero}`);
  }

  return (
    <div className="container-class">
      TAREA 1, uso de Usestate:
      <div>
        <h3>Numero: {count}</h3>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="input-number">
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(parseInt(e.target.value))}
        />
      </div>

      <h3>{Revisado ? "Revisado" : "No revisado"}</h3>
      <button onClick={() => setRevisado(!Revisado)}>
        {Revisado ? "No revisado" : "Revisar"}
      </button>

    <div>
        <button onClick={volverTareasOAV}>Volver a tareasOAV</button>
        <button onClick={() => navegarTareaX(0)}>Ir a Tarea 0</button>
        <button onClick={() => navegarTareaX(1)}>Ir a Tarea 1</button>
        <button onClick={() => navegarTareaX(2)}>Ir a Tarea 2</button>
    </div>
    </div>
  );
}

export default Clase4;
