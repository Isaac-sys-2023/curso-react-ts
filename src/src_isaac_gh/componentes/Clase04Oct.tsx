import { useState } from "react";
import '../styles/ClaseOctCuatro.css'

const ClaseOctCuatro = () => {
  const [count, setCount] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("Isaac");
  const [estaRevisado, setEstaRevisado] = useState<boolean>(false);

  function sumar() {
    setCount(count + 1);
    console.log(count);
  }

  const restar = () => {
    setCount(count - 1);
  }

  return (
    <div className="container-class">
      <h1>Clase 04 Oct</h1>
      <div>
        <h3>Mi numero: {count}</h3>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>

      <div className="input-name">
        <label>Tu nombre es {nombre}</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>

      {estaRevisado === true ? (<h3>Revisado</h3>) : (<h3>No revisado</h3>)}
      <button onClick={() => setEstaRevisado(!estaRevisado)}>Revisar</button>
    </div>
  );
}

export default ClaseOctCuatro;