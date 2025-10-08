
import './App.css'
import Presentacion from './src_laura_ml/Presentacion'
import PresentacionOAV from './src_orlando_av/PresentacionOAV'
import PresentacionYLCC from './src_yahir_cc/PresentacionYLCC'


import AppTutor from './src_isaac_gh/AppTutor'

import HomeView from './views/HomeView';

function App() {
  return (
    <>

      {
       <Presentacion nombre='Laura' descripcion='me gusta la robotica y dormir' edad={25} />
      /* <AppTutor/>
      
      <Presentacion nombre='Laura' descripcion='me gusta la robotica y dormir' edad={25} />
      <PresentacionOAV nombre='Orlando' descripcion='Estudiante de Sistemas' edad={23} />
      <PresentacionYLCC nombre='Yahir' descripcion='Estudiante de Sistemas me gusta entrenar' edad={22} /> */}
      {/* <HomeView/> */}
    </>

  )
}

export default App
