import { useState } from "react";
import "./App.css";

function Clase3() {
  const [cont, setCont] = useState<number>(1); 
  const [numero, setNumero] = useState<number>(1); 

  function multiplicar() {
    setCont(cont * numero);
  }

  function dividir() {
    setCont(cont / numero);
  }

  function reset() {
    setCont(1);
    setNumero(1);
  }

  return (
    <>
      <div className="App">
        <div>
          <h1>Contador: {cont}</h1>
          <button onClick={multiplicar}>Multiplicar</button>
          <button onClick={dividir}>Dividir</button>
          <button onClick={reset}>Resetear</button>
        </div>
        <div className="input-number">
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(parseInt(e.target.value))}
          />
        </div>
      </div>
    </>
  )
}

export default Clase3;
