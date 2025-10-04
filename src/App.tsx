import { useState } from 'react'
import './App.css'
import Presentacion from './src_laura_ml/Presentacion'
import PresentacionOAV from './src_orlando_av/PresentacionOAV'
import PresentacionYLCC from './src_yahir_cc/PresentacionYLCC'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Isaac Gutierrez Huarachi</h1>
      <Presentacion nombre='Laura' descripcion='me gusta la robotica y dormir' edad={25}/>
      <PresentacionOAV nombre='Orlando' descripcion='Estudiante de Sistemas' edad={23}/>
      <PresentacionYLCC nombre='Yahir' descripcion='Estudiante de Sistemas me gusta entrenar' edad={22}/>
    </>
    
  )
}

export default App
