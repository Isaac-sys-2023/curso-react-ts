import { useState } from "react";

const TareaView5p2 = () => {
  const [nombre, setNombre] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nombreCuenta, setNombreCuenta] = useState<string>("");
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `El nombre ingresado es: ${nombre} \nLa contraseña ingresada es: ${password} \nEl nombre de la cuenta es: ${nombreCuenta} 
      }`
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre {nombre}</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Nombre de la cuenta</label>
        <textarea
          value={nombreCuenta}
          placeholder="Nombre de la cuenta"
          onChange={(e) => setNombreCuenta(e.target.value)}
        />
       
        <button type="submit">continuar</button>
      </form>
    </>
  );
};

export default TareaView5p2;
