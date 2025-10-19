import { cursosEjemplo } from "../data/cursosEjemplo";
import type { Curso } from "../types/Curso";
import CardCurso from "../componentes/CardCurso";
import { useState } from "react";

import "../styles/views/HomeView.css";

const HomeView = () => {
  const [cursos, setCursos] = useState<Curso[]>(cursosEjemplo);
  console.log(cursos);

  return (
    <>
      <div className="cursos-container">
        {cursos.map((curso, index) => (
          <CardCurso key={index} curso={curso} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
