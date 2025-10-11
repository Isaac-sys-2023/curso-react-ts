import CardTarea2 from "../componentes/CardTarea2";
import type { Tarea } from "../types/Tarea";
import { useNavigate } from "react-router-dom";

const Clase5 = () => {
    const navigate = useNavigate();

    const tareas: Tarea[] = [
        { id: 1, titulo: "Estudiar React", descripcion: "Aprender componentes y props" },
        { id: 2, titulo: "Hacer ejercicio", descripcion: "Salir a correr 30 minutos" },
        { id: 3, titulo: "Leer un libro", descripcion: "Avanzar 20 páginas" },
    ];

    const volverTareasOAV = () =>{
        navigate("/tareasOAV");
    }
    const navegarTareaX = (Numero: number) => {
        navigate(`/tarea${Numero}`);
    }
    const navegarATarea = (tarea1:Tarea) => {
        navigate(`/tarea2/${tarea1.id}/${tarea1.titulo}/${tarea1.descripcion}`);
    }

    return (
        <div>
            TAREA 2, renderizado de componentes que usa props:
            <h2>Mis Tareas</h2>
            {tareas.map((tarea, index) => (

                <>
                <CardTarea2 key={index} tarea={tarea}/>
                <button onClick={()=>navegarATarea(tarea)}>Ver más</button>
                </>
            ))}

            <div>
                <button onClick={volverTareasOAV}>Volver a tareasOAV</button>
                <button onClick={() => navegarTareaX(0)}>Ir a Tarea 0</button>
                <button onClick={() => navegarTareaX(1)}>Ir a Tarea 1</button>
                <button onClick={() => navegarTareaX(2)}>Ir a Tarea 2</button>
            </div>
        </div>
    );
};


export default Clase5;
