// types/Tarea.ts
export interface Tarea {
  numero: number;
  titulo: string;
  descripcion: string;
  fechaPresentacion: string;
  estado: 'pendiente' | 'en-progreso' | 'completada';
  ruta: string;
  categoria?: string;
}