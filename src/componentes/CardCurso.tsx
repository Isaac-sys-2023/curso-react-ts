import type { Curso } from "../types/Curso";

//import "../styles/componentes/CardCurso.css";
import { useNavigate } from "react-router-dom";
import TutorImage from "./TutorImage";

interface CardCursoProps {
  curso: Curso;
}

const CardCurso = ({ curso }: CardCursoProps) => {
  const navigate = useNavigate();
  const navegarACurso = (curso: Curso) => {
    const cursoPath: string = curso.titulo.trim().replaceAll(/[/\s]/g, "-");
    navigate(`/curso/${cursoPath}`, {
      state: { myCurso: curso, mensaje: "Hola", numero: 2 },
    });
  };

  return (
    <div
      className={`card_curso_container ${
        curso.estaCancelado ? "cancelado" : ""
      }`}
    >
      <h1>{curso.titulo}</h1>

      <h2>Fecha de Inicio: {curso.fechaInicio}</h2>

      <h3>Tutores:</h3>
      <div className="card-tutors-container">
        {curso.tutores.map((tutor, index) => (
          <div className="card-tutor-container" key={index}>
            <TutorImage tutor={tutor} tamanio={56}/>
          </div>
        ))}
      </div>

      <h3 className={`curso-status ${curso.status === "Por Iniciar" ? "before" : curso.status === "En Progreso" ? "now" : "after"}`}>{curso.status}</h3>
      <button onClick={() => navegarACurso(curso)}>Ver más</button>
    </div>
  );
};

export default CardCurso;
