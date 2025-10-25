// src/src_orlando_av/AppOrlando.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/HomeLayout";
import HomeOAVView from "./views/HomeOAVView";
import Tarea0View from "./views/Tarea0View";
import Tarea1View from "./views/Tarea1View";
import Tarea2View from "./views/Tarea2View";
import DetalleTarea2 from "./componentes/DetalleTarea2";
import TareaView4 from "./views/Tarea4View";
import Tarea5ViewRegistro from "./views/Tarea5ViewRegistro";
import Tarea5ViewLogin from "./views/Tarea5ViewLogin";
// import './styles/global.css';
// main.tsx o App.tsx

const AppOrlando = () => {
  return (
    <Routes>
      {/* EN AQUI ES COOMO LE DECIMOS A TODAS LAS RUTAS DE OAV QUE USEN EL MainLayout */}
      <Route element={<MainLayout />}>
        <Route index element={<HomeOAVView />} />
        <Route path="tarea0" element={<Tarea0View />} />
        <Route path="tarea1" element={<Tarea1View />} />
        <Route path="tarea2" element={<Tarea2View />} />
        <Route path="tarea2/:id/:titulo/:descripcion" element={<DetalleTarea2 />} />
        <Route path="tarea4View" element={<TareaView4 />} />
        <Route path="tarea5Login" element={<Tarea5ViewLogin />} />
        <Route path="tarea5Registro" element={<Tarea5ViewRegistro />} />
      </Route>
    </Routes>
  );
};

export default AppOrlando;
