import { useState } from 'react'
import './App.css'
import Presentacion from './src_laura_ml/Presentacion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Isaac Gutierrez Huarachi</h1>
      <Presentacion nombre='Laura' descripcion='me gusta la robotica y dormir' edad={25}/>
    </>
    
  )
}

export default App
