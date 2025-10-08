import type { Curso } from "../types/Curso";

interface CardCursoProps{
    curso: Curso;
}

const CardCurso = ({curso}: CardCursoProps) => {
    return(
        <>
            <h1>{curso.titulo}</h1>
            <p>{curso.descripcion}</p>

            <h2>Fecha de Inicio: {curso.fechaInicio}</h2>
            <h3>Tutores:</h3>
            {curso.tutores.map((tutor, index)=>(
                <img key={index} src={tutor.imagen} alt={tutor.nombre} />
            ))}
            {curso.horarios.map((horario, index)=>(
                <p key={index}>{horario.dia} {horario.horaInicio} -  {horario.horaFin} modalidad: {horario.modalidad}</p>
            ))}
        </>
    )
}

export default CardCurso;