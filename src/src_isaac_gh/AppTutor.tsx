//Su nombre, su edad y una descripcion suya con props
// import "./AppTutor.css"
import Nombre from "./componentes/Clase02Oct";
import ClaseOctCuatro from "./componentes/Clase04Oct";
import CardProducto, { type Empresa, type Producto } from "./componentes/Clase04Oct2";
import PerfilPersona from "./componentes/Clase04Oct3";

import { Routes, Route } from "react-router-dom";

const AppTutor = () => {
    const producto1: Producto = {
        nombre: "Mouse inalámbrico",
        descripcion: "Mouse ergonómico con batería recargable.",
        precio: 120,
    }

    const empresa1: Empresa = {
        nombreEmpresa: "Asus",
        direccion: "Av. Heroinas y Av. Ayacucho",
    }

    return (
        <div className="tutor-container">
            {/* <h1>Isaac Gutierrez Huarachi</h1>
            <h2>Edad 21</h2>
            <h3>Soy el tutor de la clase</h3>

            <ClaseOctCuatro/>
            <CardProducto producto={producto1} empresa={empresa1}/>
            <PerfilPersona/> */}
            <Routes>
                <Route path="/Clase2" element={<PerfilPersona/>}/>
                <Route path="/Clase3" element={<ClaseOctCuatro/>}/>
            </Routes>
        </div>
    )
}

export default AppTutor;