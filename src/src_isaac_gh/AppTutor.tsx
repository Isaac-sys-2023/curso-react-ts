//Su nombre, su edad y una descripcion suya con props
// import "./AppTutor.css"
import ClaseOctCuatro from "./componentes/Clase04Oct";
import PerfilPersona from "./componentes/Clase04Oct3";

import { Routes, Route } from "react-router-dom";
import ClaseOctCatorce from "./componentes/Clase14Oct";
import ClaseOctQuince from "./componentes/Clase15Oct";

const AppTutor = () => {
    return (
        <div className="tutor-container">
            <Routes>
                <Route path="/Clase2" element={<PerfilPersona/>}/>
                <Route path="/Clase3" element={<ClaseOctCuatro/>}/>
                <Route path="/Clase7" element={<ClaseOctCatorce/>}/>
                <Route path="/Clase8" element={<ClaseOctQuince/>}/>
            </Routes>
        </div>
    )
}

export default AppTutor;