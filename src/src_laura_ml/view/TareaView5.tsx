import { useState } from "react";

const tarea5 = () => {
  const [mail, setMail] = useState<string>("");
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `El mail ingresado es: ${mail} 
      }`
    );
  };
  return (
    <>
      <h1>Tarea 5</h1>
      <p>Login</p>

      <h3>
        Usuario escribe → onChange → actualiza estado → React vuelve a
        renderizar → input muestra nuevo valor
      </h3>

      <form onSubmit={handleSubmit}>
        <label>Mail {mail}</label>
        <input
          type="email"
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <button type="submit">continuar</button>
        
      </form>
    </>
  );
};

export default tarea5;
