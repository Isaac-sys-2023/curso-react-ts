import type { Tarea } from "../types/Tarea";

interface TareaProps {
    tarea?: Tarea;
}
//Componente que recibe una tarea y la muestra
const CardTarea2 = ({ tarea }: TareaProps) => {
    return (
        <>
            <p>Id de Tarea: {tarea?.id}</p>
            <p>Titulo de Tarea: {tarea?.titulo}</p>
            <p>Descripcion de Tarea: {tarea?.descripcion}</p>
        </>
    );
};

export default CardTarea2;