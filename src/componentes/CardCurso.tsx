import type { Curso } from "../types/Curso";

//import "../styles/componentes/CardCurso.css";

interface CardCursoProps {
  curso: Curso;
}

const CardCurso = ({ curso }: CardCursoProps) => {
  return (
    <div className={`card_curso_container ${curso.estaCancelado ? "cancelado" : ""}`}>
      <h1>{curso.titulo}</h1>

      {/* <img className="img-curso" src={curso.imgCurso} alt={curso.titulo} /> */}

      {/* <p>{curso.descripcion}</p> */}

      <h2>Fecha de Inicio: {curso.fechaInicio}</h2>

      <h3>Tutores:</h3>
      <div className="card-tutors-container">
        {curso.tutores.map((tutor, index) => (
          <div className="card-tutor-container" key={index}>
            <img className="img-tutor" src={tutor.imagen} alt={tutor.nombre} title={`${tutor.nombre} ${tutor.apellidos}`}/>
            {/* <p>
              {tutor.nombre} {tutor.apellidos}
            </p> */}
          </div>
        ))}
      </div>

      {/* {curso.horarios.map((horario, index) => (
        <p key={index}>
          {horario.dia} {horario.horaInicio} - {horario.horaFin} modalidad:{" "}
          {horario.modalidad}
        </p>
      ))} */}

      <h3>{curso.status}</h3>
      
    </div>
  );
};

export default CardCurso;
