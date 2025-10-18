// import "./AppTutor.css"
import ClaseOctCuatro from "./componentes/Clase04Oct";
import PerfilPersona from "./componentes/Clase04Oct3";

import { Routes, Route } from "react-router-dom";
import ClaseOctCatorce from "./views/Clase14OctView";
import ClaseOctQuince from "./views/Clase15OctView";
import ClaseOctDiesiseis from "./views/Clase16OctView";
import HomeClasesView from "./views/HomeClasesView";
import ClaseOctCuatroDos from "./views/Clase04OctView2";
import ClaseOctCuatroTres from "./views/Clase04OctView3";

const AppTutor = () => {
    return (
        <div className="tutor-container">
            <Routes>
                <Route path="/clases" element={<HomeClasesView/>}/>
                <Route path="/Clase2" element={<PerfilPersona/>}/>
                <Route path="/Clase3" element={<ClaseOctCuatro/>}/>
                <Route path="/Clase3-1-1" element={<ClaseOctCuatroDos/>}/>
                <Route path="/Clase3-1-2" element={<ClaseOctCuatroTres/>}/>
                <Route path="/Clase7" element={<ClaseOctCatorce/>}/>
                <Route path="/Clase8" element={<ClaseOctQuince/>}/>
                <Route path="/Clase9" element={<ClaseOctDiesiseis/>}/>
            </Routes>
        </div>
    )
}

export default AppTutor;