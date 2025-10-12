import { Route, Routes } from "react-router-dom";
import Tarea2View from './views/Tarea2View';
import Tarea1View from './views/Tarea1View';
import Tarea0View from './views/Tarea0View';
import DetalleTarea2 from './componentes/DetalleTarea2';
import HomeOAVView from "./views/HomeOAVView";

const TareasOAV = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomeOAVView />} />
        <Route path="tarea0" element={<Tarea0View />} />
        <Route path="tarea1" element={<Tarea1View />} />
        <Route path="tarea2" element={<Tarea2View />} />
        <Route
          path="tarea2/:id/:titulo/:descripcion"
          element={<DetalleTarea2 />}
        />
      </Routes>
    </>
  );
};

export default TareasOAV;
