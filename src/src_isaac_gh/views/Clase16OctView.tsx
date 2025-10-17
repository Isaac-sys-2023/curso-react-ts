import { useState } from "react";

interface FormData {
  nombre: string;
  password: string;
  descripcion: string;
  pais: string;
  genero: string;
  telefono: string,
  aceptaTerminos: boolean;
}

const ClaseOctDiesiseis = () => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    password: "",
    descripcion: "",
    pais: "",
    genero: "",
    telefono: "",
    aceptaTerminos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(form.nombre === "" || form.password === "" || form.descripcion === "" || form.pais === "" || form.genero === "" || form.telefono === ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    if(form.aceptaTerminos === false){
        alert("Tienes que aceptar los terminos");
        
        return;
    }

    if(/^[0-9]+$/.test(form.telefono) === false){
        alert("Solo debe tener numero");
        return;
    }

    alert(
      `El nombre ingresado es: ${form.nombre} \nLa contraseña ingresada es: ${
        form.password
      } \nLa descripcion es: ${form.descripcion} \nEl pais es ${
        form.pais
      } \nTu genero es ${form.genero} \n Acepto? ${
        form.aceptaTerminos === true ? "Si" : "No"
      }`
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Clase 16 de Octubre</h1>

      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => handleChange(e)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
        <label>Telefono</label>
        <input
          type="number"
          name="telefono"
          placeholder="Ej: 78998900"
          value={form.telefono}
          onChange={(e) => handleChange(e)}
        />
        <label>Descripcion</label>
        <textarea
          value={form.descripcion}
          name="descripcion"
          placeholder="Descripcion"
          onChange={(e) => handleChange(e)}
        />
        <label>Pais</label>
        <select
          name="pais"
          value={form.pais}
          onChange={(e) => handleChange(e)}
        >
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
            checked={form.genero === "masculino"}
            onChange={(e) => setForm({ ...form, genero: e.target.value })}
          />
          Masculino
          <input
            type="radio"
            name="genero"
            value="femenino"
            checked={form.genero === "femenino"}
            onChange={(e) => handleChange(e)}
          />
          Femenino
        </div>
        <input
          name="aceptaTerminos"
          type="checkbox"
          checked={form.aceptaTerminos}
          onChange={(e) => setForm({...form, aceptaTerminos: e.target.checked})}
        />
        Acepto términos
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default ClaseOctDiesiseis;
