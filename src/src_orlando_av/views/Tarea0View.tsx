import Tarea1 from "./Tarea1View";
import Tarea2 from "./Tarea2View";

//AQUI SE RENDERIZA LAS TAREAS
interface PropsOAV{
    nombre: string,
    edad: number,
    descripcion: string,
}


const PresentacionOAV = ({nombre, edad, descripcion}: PropsOAV) => { 
    return (
        <>
        <div>
            TAREA 0, uso de Props:
            <p>Nombre: {nombre}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Edad: {edad}</p>
        </div>
        <div>
            Tarea 1, hooks useState:
            <Tarea1/>
        </div>    
        <div>   
            Tarea 2, renderizar, map y types:
            <Tarea2/>
        </div>
            La tarea 3 no la hice por falta de tiempo
        </>
    );
}

export default PresentacionOAV;