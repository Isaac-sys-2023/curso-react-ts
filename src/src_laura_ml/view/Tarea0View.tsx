import viteLogo from "../../public/vite.svg";
import Tarea1 from "../componentes/Tarea1";
import Tarea2 from "../componentes/TareasView";



interface PresentacionProps{
    nombre: string,
    edad: number,
    descripcion: string,
}

function Tarea0View({nombre, edad, descripcion}: PresentacionProps){
    return(
        <>
            <h2>Tarea de: {nombre}</h2>
            <p>{descripcion}</p>
            <p>edad: {edad}</p>
            <Tarea1/>
            <Tarea2/>
        </>
    )
}

export default Tarea0View;