import { cursosEjemplo } from "../data/cursosEjemplo";
import type { Curso } from "../types/Curso";
import CardCurso from "../componentes/CardCurso";
import { useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

//import '../styles/views/HomeView.css'

const HomeView = () =>{
    const navigate = useNavigate();
    
    const [cursos, setCursos] = useState<Curso[]>(cursosEjemplo);

    const navegarACurso = (curso:Curso) => {
        navigate(`/curso/${curso.titulo}`, {state:{myCurso: curso, mensaje: "Hola", numero: 2}});
    }
    console.log(cursos);
    return(
        <div className="cursos-container">
            <Link to="/about">Ir a About</Link>
            {cursos.map((curso, index)=>(
                <>
                <CardCurso key={index} curso={curso}/>
                <button onClick={()=>navegarACurso(curso)}>Ver más</button>
                </>
            ))}
        </div>
    );
}

export default HomeView;