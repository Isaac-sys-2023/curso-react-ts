import type { Tutor } from "../types/Tutor";
import "../styles/componentes/TutorCard.css";
import TutorImage from "./TutorImage";
import { Link } from "react-router-dom";

interface TutorCardProps {
  tutor: Tutor;
  esEstudiante?: boolean;
  urlEstudiante?: string;
  color?: string;
}
const TutorCard = ({
  tutor,
  esEstudiante = false,
  urlEstudiante = "/",
  color = "purple",
}: TutorCardProps) => {
  // const fechaAEdad = (fechaInput: string): number | null => {
  //   if (!fechaInput) return null;

  //   // Normaliza separadores (reemplaza - por /)
  //   const normalizada = fechaInput.replace(/-/g, "/");

  //   const partes = normalizada.split("/");
  //   let dia: number, mes: number, anio: number;

  //   // Detectar formato según la posición del año
  //   if (partes[0].length === 4) {
  //     // yyyy/mm/dd
  //     anio = parseInt(partes[0]);
  //     mes = parseInt(partes[1]) - 1;
  //     dia = parseInt(partes[2]);
  //   } else {
  //     // dd/mm/yyyy
  //     dia = parseInt(partes[0]);
  //     mes = parseInt(partes[1]) - 1;
  //     anio = parseInt(partes[2]);
  //   }

  //   const fechaNacimiento = new Date(anio, mes, dia);
  //   if (isNaN(fechaNacimiento.getTime())) return null; // Evita NaN

  //   const hoy = new Date();
  //   let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  //   const mesDiff = hoy.getMonth() - fechaNacimiento.getMonth();
  //   const diaDiff = hoy.getDate() - fechaNacimiento.getDate();

  //   // Ajustar si aún no cumplió años este año
  //   if (mesDiff < 0 || (mesDiff === 0 && diaDiff < 0)) edad--;

  //   return edad;
  // };

  return (
    <div className={`tutor-card ${color}`}>
      <div className="tutor-card-header">
        <TutorImage tutor={tutor} tamanio={100} color={color} />
        <div className="tutor-card-info">
          <h3>
            {tutor.nombre} {tutor.apellidos}
          </h3>
          <p>
            Edad:{" "}
            {/* {tutor.fechaNacimiento ? (
              <span>{fechaAEdad(tutor.fechaNacimiento) ?? "??"}</span>
            ) : (
              <span>??</span>
            )} */}
          </p>
        </div>
      </div>
      {tutor.descripcion && (
        <p className="tutor-descripcion">{tutor.descripcion}</p>
      )}
      {/* <div className="tutor-card-redes">
        {tutor.redes && (
          <>
            {tutor.redes.map((red, index) => (
              <a key={index} href={red.url} target="_blank">
                <img
                  className="tutor-card-red"
                  src={red.img}
                  alt={red.nombre}
                />
              </a>
            ))}
          </>
        )}
      </div> */}

      {esEstudiante && <Link to={urlEstudiante ? `${urlEstudiante}` : "/"} className="student-button">Ver Tareas</Link>}
    </div>
  );
};
export default TutorCard;
