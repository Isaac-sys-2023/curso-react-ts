import { Route, Routes } from "react-router-dom";
import Tarea2View from './views/Tarea2View';
import Tarea1View from './views/Tarea1View';
import Tarea0View from './views/Tarea0View';
import DetalleTarea2 from './componentes/DetalleTarea2';
import HomeOAVView from "./views/HomeOAVView";
import TareaView4 from "./views/TareaView4";
import Tarea5ViewRegistro from "./views/Tarea5ViewRegistro";
import Tarea5ViewLogin from "./views/Tarea5ViewLogin";

const TareasOAV = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomeOAVView />} />
        <Route path="tarea0" element={<Tarea0View />} />
        <Route path="tarea1" element={<Tarea1View />} />
        <Route path="tarea2" element={<Tarea2View />} />
        <Route path="tarea4View" element={<TareaView4 />} />
        <Route path="tarea5Login" element={<Tarea5ViewLogin />} />
        <Route path="tarea5Registro" element={<Tarea5ViewRegistro />} />
        <Route
          path="tarea2/:id/:titulo/:descripcion"
          element={<DetalleTarea2 />}
        />
      </Routes>
    </>
  );
};

export default TareasOAV;
