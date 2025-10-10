import CardTarea2 from "../componentes/Tarea2OAV";
import type { Tarea } from "../types/Tarea";

const Clase5 = () => {
    const tareas: Tarea[] = [
        { id: 1, titulo: "Estudiar React", descripcion: "Aprender componentes y props" },
        { id: 2, titulo: "Hacer ejercicio", descripcion: "Salir a correr 30 minutos" },
        { id: 3, titulo: "Leer un libro", descripcion: "Avanzar 20 páginas" },
    ];

    return (
        <div>
        <h2>Mis Tareas</h2>
        {tareas.map((tarea, index) => (
            <CardTarea2 key={index} tarea={tarea} />
        ))}
        </div>
    );
};


export default Clase5;
