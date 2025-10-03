import viteLogo from "../../public/vite.svg";

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
        </>
    )
}

export default Presentacion;