import { useState } from "react";
import type { Tarea } from "../types/Tarea";

function Tarea2(){
    const[Tarea, setTarea]= useState <Tarea>({
        titulo: "renderizar",
        descripcion: "tarea de la clase 4",
        dia: new Date(),

    })
     const [tareas, setTareas] = useState<Tarea[]>([{
            titulo: "tarea1",
            descripcion: "descripcion tarea 1",
            dia: new Date("2025-10-07")
        }, {
            titulo: "tarea2",
            descripcion: "descripcion tarea 2",
            dia: new Date("2025-10-08")
        }, {
            titulo: "tarea3",
            descripcion: "descripcion tarea 3",
            dia: new Date("2025-10-09")
        }])
    return(
       <div>
            {
                tareas.map((tarea, index) => (
                    <div key={index}>
                        <h2>Titulo:{tarea.titulo}</h2>
                        <p>Descripcion: {tarea.descripcion}</p>
                        <p>fecha: {tarea.dia.toISOString()}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Tarea2;