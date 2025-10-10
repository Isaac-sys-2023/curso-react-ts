import { useState } from "react";

const Clase4 = () => {
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

  return (
    <div className="container-class">
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
    </div>
  );
}

export default Clase4;
