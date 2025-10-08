import { cursosEjemplo } from "../data/cursosEjemplo";
import type { Curso } from "../types/Curso";
import CardCurso from "../componentes/CardCurso";
import { useState } from "react";

const HomeView = () =>{
    const [cursos, setCursos] = useState<Curso[]>(cursosEjemplo);
    console.log(cursos);
    return(
        <>
            {cursos.map((curso, index)=>(
                <CardCurso key={index} curso={curso}/>
            ))}
        </>
    );
}

export default HomeView;