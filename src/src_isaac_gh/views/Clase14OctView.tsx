import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const ClaseOctCatorce = () => {
  const [count, setCount] = useState<number>(0);

  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log("Efecto ejecutado");
    document.title = `Has hecho clic ${count} veces`;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("EError al cargar datos");
        console.log("Llamamos a la Api");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
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
  if (error != "") return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Clicks: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>

      <div>
        <h2>Lista de users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClaseOctCatorce;
