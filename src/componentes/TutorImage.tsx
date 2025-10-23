import type { Tutor } from "../types/Tutor";
import "../styles/componentes/TutorImage.css";

export interface TutorImageProps {
  tutor: Tutor;
  tamanio?: number;
  color?: string;
}

const TutorImage = ({
  tutor,
  tamanio = 500,
  color = "purple",
}: TutorImageProps) => {
  return (
    <div>
      <img
        className={`img-tutor ${color}`}
        src={tutor.imagen}
        alt={tutor.nombre}
        title={`${tutor.nombre} ${tutor.apellidos}`}
        width={tamanio}
      />
    </div>
  );
};

export default TutorImage;
