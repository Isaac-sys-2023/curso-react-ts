import { useState } from "react";

const ClaseOctQuince = () => {
  const [nombre, setNombre] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [pais, setPais] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [aceptaTerminos, setAceptaTerminos] = useState<boolean>(false);
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `El nombre ingresado es: ${nombre} \nLa contraseña ingresada es: ${password} \nLa descripcion es: ${descripcion} \nEl pais es ${pais} \nTu genero es ${genero} \n Acepto? ${
        aceptaTerminos === true ? "Si" : "No"
      }`
    );
  };
  return (
    <>
      <h1>Clase 15 de Octubre</h1>
      <p>Contenido de la clase 15 de octubre.</p>

      <h3>
        Usuario escribe → onChange → actualiza estado → React vuelve a
        renderizar → input muestra nuevo valor
      </h3>

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
        <label>Descripcion</label>
        <textarea
          value={descripcion}
          placeholder="Descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Pais</label>
        <select value={pais} onChange={(e) => setPais(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Chile">Chile</option>
          <option value="Argentina">Argentina</option>
        </select>
        <label>Genero</label>
        <div>
          <input
            type="radio"
            name="genero"
            value="masculino"
            checked={genero === "masculino"}
            onChange={(e) => setGenero(e.target.value)}
          />
          Masculino
          <input
            type="radio"
            name="genero"
            value="femenino"
            checked={genero === "femenino"}
            onChange={(e) => setGenero(e.target.value)}
          />
          Femenino
        </div>
        <input
          type="checkbox"
          checked={aceptaTerminos}
          onChange={(e) => setAceptaTerminos(e.target.checked)}
        />
        Acepto términos
        <input
          type="file"
          onChange={(e) => setArchivo(e.target.files?.[0] || null)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default ClaseOctQuince;
