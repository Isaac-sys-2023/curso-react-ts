import { useNavigate } from "react-router-dom";

interface PropsOAV{
    nombre?: string,
    edad?: number,
    descripcion?: string,
}

//Componente que recibe props y las muestra, con valores por defecto
const PresentacionOAV = ({nombre = "Valor por Defecto", edad = 0, descripcion = "Sin descripcion"}: PropsOAV) => { 
    const navigate = useNavigate();

    const volverTareasOAV = () =>{
        navigate("/tareasOAV");
    }
    const navegarTareaX = (Numero: number) => {
        navigate(`/tarea${Numero}`);
    }

    return (
        <>
        <div>
            TAREA 0, uso de Props:
            <p>Nombre: {nombre}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Edad: {edad}</p>
        </div>
        
        <div>
            <button onClick={volverTareasOAV}>Volver a tareasOAV</button>
            <button onClick={() => navegarTareaX(0)}>Ir a Tarea 0</button>
            <button onClick={() => navegarTareaX(1)}>Ir a Tarea 1</button>
            <button onClick={() => navegarTareaX(2)}>Ir a Tarea 2</button>
        </div>
        </>
    );
}

export default PresentacionOAV;