import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Nombre from './componentes/Nombre';
import viteLogo from "../public/vite.svg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Isaac Gutierrez Huarachi</h1>
      <Nombre precio={20} titulo={"Hola"} descripcion={"Como estas"}/>

      <Nombre precio={30} titulo={"Vaso"} descripcion={"Vaso de vidrio"}/>
      <Nombre precio={20} titulo={"Hola"} descripcion={"Como estas"}/>
      <Nombre precio={20} titulo={"Hola"} descripcion={"Como estas"}/>
    </>
  )
}

export default App
