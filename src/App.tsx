
//import './App.css'
import Presentacion from './src_laura_ml/Presentacion'
import PresentacionOAV from './src_orlando_av/views/Tarea0View'
import PresentacionYLCC from './src_yahir_cc/PresentacionYLCC'


import AppTutor from './src_isaac_gh/AppTutor'

import HomeView from './views/HomeView';

import { Routes, Route } from 'react-router-dom';

import AboutView from './views/AboutView';
import CursoView from './views/CursoView';
import NotFound from './views/NotFoundView';
import AppOrlando from './src_orlando_av/AppOrlando';
import Tarea2View from './src_orlando_av/views/Tarea2View';
import Tarea1View from './src_orlando_av/views/Tarea1View';
import Tarea0View from './src_orlando_av/views/Tarea0View';
import DetalleTarea2 from './src_orlando_av/componentes/detalletarea2';

function App() {
  return (
    <>
      {/* <Presentacion nombre='Laura' descripcion='me gusta la robotica y dormir' edad={25} /> */}
      <AppTutor/>
      
      {/*<Presentacion nombre='Laura' descripcion='me gusta la robotica y dormir' edad={25} />
      <PresentacionOAV nombre='Orlando' descripcion='Estudiante de Sistemas' edad={23} />
      <PresentacionYLCC nombre='Yahir' descripcion='Estudiante de Sistemas me gusta entrenar' edad={22} /> */}
      {/* <HomeView/> */}
        <Routes>
          <Route path='/tareasOAV' element={<AppOrlando/>}/>
          <Route path='/tarea0' element={<Tarea0View/>}/>
          <Route path='/tarea1' element={<Tarea1View/>}/>
          <Route path='/tarea2' element={<Tarea2View/>}/>
          <Route path='/tarea2/:id/:titulo/:descripcion' element={<DetalleTarea2/>}/>
          <Route path='/about' element={<AboutView/>}/>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/curso/:nombre' element={<CursoView/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>

  )
}

export default App
