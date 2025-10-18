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
        <Route element={<LayoutBasico/>}>
          <Route path="/tareasOAV/*" element={<AppOrlando />} />
        </Route>
        <Route element={<FullLayout/>}>
          <Route path="/about" element={<AboutView />} />
        </Route>
        <Route element={<LayoutClasico />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route element={<DashboardLayout/>}>
          <Route path="/curso/:nombre" element={<CursoView />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
