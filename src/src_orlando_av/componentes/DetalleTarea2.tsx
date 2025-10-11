import { useNavigate, useParams } from "react-router-dom";

const DetalleTarea2 = () => {
    const { id, titulo, descripcion } = useParams();
    const navigate = useNavigate();
    const volverTarea2 = () =>{
        navigate("/tarea2");
    }
    return (
        <div>
            <h2>Detalle de Tarea</h2>
            <p>Id de Tarea: {id}</p>
            <p>Titulo de Tarea: {titulo}</p>
            <p>Descripcion de Tarea: {descripcion}</p>
            <div>
                <button onClick={volverTarea2}>Volver a Tarea 2</button>
                
            </div>

        </div>
        
    );
};

export default DetalleTarea2;
