//Su nombre, su edad y una descripcion suya con props
import "./AppTutor.css"
import ClaseOctCuatro from "./componentes/Clase04Oct";

const AppTutor = () => {
    return (
        <div className="tutor-container">
            <h1>Isaac Gutierrez Huarachi</h1>
            <h2>Edad 21</h2>
            <h3>Soy el tutor de la clase</h3>

            <ClaseOctCuatro/>
        </div>
    )
}

export default AppTutor;