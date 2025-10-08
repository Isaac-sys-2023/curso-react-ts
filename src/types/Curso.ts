
import type { Horario } from "./Horario";
import type { Tutor } from "./Tutor";

export interface Curso {
    titulo: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin?: Date | string;
    horarios: Horario[];
    duracionEnSemanas: number;
    tutores: Tutor[];
    precioGeneral: number;
    precioUMSS: number;
    status: "Por Iniciar" | "En Progreso" | "Finalizado";
    estaCancelado: boolean;
    imgCurso: string;
    aficheImg?: string;
}
