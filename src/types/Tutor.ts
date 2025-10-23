import type { Red } from "./Red";

export interface Tutor {
  nombre: string;
  apellidos: string;
  fechaNacimiento?: string;
  descripcion?: string;
  imagen: string;
  redes?: Red[]

  tareasUrl?: string;
}
