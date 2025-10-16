import { useEffect, useState } from "react";

interface Dog {
  message: string;
  status: string; 
}

const TareaView4 = () => {
  const [count, setCount] = useState<number>(0);

  const [dogs, setDogs] = useState<Dog>({ message: "Que alguien detenga el semestre", status: "error" });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log("Efecto ejecutado");
    document.title = `Has hecho clic ${count} veces`;

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar datos");
        console.log("Llamamos a la Api");
        return res.json();
      })
      .then((data) => {
        setDogs(data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError("Error al cargar los datos");
      });
  }, [count]);

  if (loading === true) return <p>Cargando usuarios...</p>;
  if (error != "") return <p style={{ color: "cyan" }}>{error}</p>;

  return (
    <div>
      <h2>Clicks: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <div>
        <h2>Perro:</h2>
        <img src={dogs.message} alt="Perro aleatorio" style={{ maxWidth: "500px" }} />
        <h3>status: {dogs.status}</h3>
      </div>
    </div>
  );
};

export default TareaView4;
