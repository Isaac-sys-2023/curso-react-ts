import { useState } from "react";
// import '../styles/Tarea1.css'

const Tarea1 = () => {
  const [count, setCount] = useState<number>(1);
  const [numero, setNumero] = useState<number>(1);
  const [estaRevisado, setEstaRevisado] = useState<boolean>(false);

  function multiplicar() {
    setCount(count * numero);
    console.log(count);
  }

  const dividir = () => {
    setCount(count / numero);
  }
  const reset = ()=>{
    setCount(1);
    setNumero(1);
  }
  return (
    <div className="container-class">
      <h1>Tarea 1</h1>
      <div>
        <h3>Mi numero: {count}</h3>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>

      <div className="input-number">
        <label>Añade un numero {numero}</label>
        <br />
        <input type="number" value={numero} onChange={(e) => setNumero(parseInt(e.target.value))} />
      </div>

      {estaRevisado === true ? (<h3>Revisado</h3>) : (<h3>No revisado</h3>)}
      <button onClick={() => setEstaRevisado(!estaRevisado)}>Revisar</button>
     
     
      <button onClick={()=> reset()}>RESET</button>
    </div>
  );
}

export default Tarea1;