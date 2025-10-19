//import './App.css'
import AppTutor from "./src_isaac_gh/AppTutor";

import HomeView from "./views/HomeView";

import { Routes, Route } from "react-router-dom";

import AboutView from "./views/AboutView";
import CursoView from "./views/CursoView";
//import NotFound from "./views/NotFoundView";
import AppOrlando from "./src_orlando_av/AppOrlando";
import LayoutBasico from "./layout/LayoutBasico";
import LayoutClasico from "./layout/LayoutClasico";
import FullLayout from "./layout/LyoutCompleto";
import { DashboardLayout } from "./layout/LayoutDashboard";

function App() {
  return (
    <>
      <AppTutor />
      <Routes>
        <Route element={<LayoutBasico />}>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/curso/:nombre" element={<CursoView />} />
        </Route>

        <Route path="/tareasOAV/*" element={<AppOrlando />} />

        <Route element={<FullLayout />}></Route>

        <Route element={<LayoutClasico />}></Route>

        <Route element={<DashboardLayout />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
