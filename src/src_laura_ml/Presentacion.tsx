import viteLogo from "../../public/vite.svg";
import Tarea1 from "./componentes/Tarea1";

interface PresentacionProps{
    nombre: string,
    edad: number,
    descripcion: string,
}

function Presentacion({nombre, edad, descripcion}: PresentacionProps){
    return(
        <>
            <h2>Tarea de: {nombre}</h2>
            <p>{descripcion}</p>
            <p>edad: {edad}</p>
            <Tarea1/>
        </>
    )
}

export default Presentacion;