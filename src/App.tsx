
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
          <Route path='/about' element={<AboutView/>}/>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/curso/:nombre' element={<CursoView/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>

  )
}

export default App
