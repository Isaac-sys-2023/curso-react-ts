export interface Tutor {
  nombre: string;
  apellidos: string;
  edad?: number;
  fechaNacimiento?: Date | string;
  descripcion?: string;
  imagen: string;
  githubUrl?: string;
}
