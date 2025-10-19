import { useLocation } from "react-router-dom";
import type { Horario } from "../types/Horario";
import type { Tutor } from "../types/Tutor";
import "../styles/views/CursoView.css";
import type { Tech } from "../types/Tech";
// import TechSlider from "../componentes/TechSlider";
import Tarjeta from "../componentes/Tarjeta";
import TutorCard from "../componentes/TutorCard";

const CursoView = () => {
  const location = useLocation();

  const { myCurso } = location.state || {};

  const capitalizeFirstLetter = (string: string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <div className="curso-container">
      {!myCurso || (myCurso.estaCancelado && <p>Curso no disponible</p>)}

      <h1 className="curso-title">{myCurso.titulo}</h1>

      <div className="curso-tech-imagenes">
        {myCurso.techs.map((tech: Tech, index: number) => (
          <img
            className="curso-tech-image"
            src={tech.imgUrl}
            alt=""
            key={index}
            title={tech.nombre}
          />
        ))}
      </div>
      {/* <TechSlider techs={myCurso.techs} /> */}

      <p>{myCurso.descripcion}</p>

      <h3>Fecha de Inicio: {myCurso.fechaInicio}</h3>
      <h3
        className={`curso-status-ind ${
          myCurso.status === "Por Iniciar"
            ? "before-ind"
            : myCurso.status === "En Progreso"
            ? "now-ind"
            : "after-ind"
        }`}
      >
        {myCurso.status}
      </h3>

      <div className="curso-horarios-tarjetas">
        {myCurso.horarios.map((horario: Horario, index: number) => (
          <>
            <Tarjeta
              titulo={horario.dia}
              descripciones={[
                `${horario.horaInicio} - ${horario.horaFin}`,
                capitalizeFirstLetter(horario.modalidad),
              ]}
              key={index}
              color="yellow"
            />
          </>
        ))}
      </div>

      <h3>Duracion: {myCurso.duracionEnSemanas} semanas</h3>

      <h2 className="curso-tutores-title">Tutores:</h2>
      <div className="card-tutors-container">
        {myCurso.tutores.map((tutor: Tutor, index: number) => (
          <TutorCard tutor={tutor} key={index}/>
        ))}
      </div>

      <h2 className="curso-tutores-title">Precios:</h2>
      <div className="precios">
        <Tarjeta
          titulo="Precio Gral."
          descripciones={[`${myCurso.precioGeneral} Bs.`]}
          color="pink"
        />
        <Tarjeta
          titulo="Precio UMSS"
          descripciones={[`${myCurso.precioUMSS} Bs.`]}
          color="pink"
        />
      </div>

      <h2 className="curso-tutores-title">Estudiantes:</h2>
      {myCurso.estudiantes ? <div className="card-tutors-container">
        {myCurso.estudiantes.map((tutor: Tutor, index: number) => (
          <TutorCard tutor={tutor} key={index} color="black" esEstudiante={true} urlEstudiante={tutor.tareasUrl}/>
        ))}
      </div> : <p>Sin estudiantes aun</p>}
    </div>
  );
};

export default CursoView;
