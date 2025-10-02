import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Nombre from './componentes/Nombre';
import viteLogo from "../public/vite.svg";

import Presentacion from "./src_isaac_gh/Presentacion";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Presentacion/>
    </>
  )
}

export default App
