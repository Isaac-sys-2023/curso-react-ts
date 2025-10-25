// components/TareaCard.tsx
import { useNavigate } from "react-router-dom";
import type{ Tarea } from "../types/Tareas";
import '../styles/components/TareaCard.css';

interface TareaCardProps {
  tarea: Tarea;
}

const TareaCard = ({ tarea }: TareaCardProps) => {
  const navigate = useNavigate();

  const getEstadoClass = () => {
    switch (tarea.estado) {
      case 'completada':
        return 'estado-completada';
      case 'en-progreso':
        return 'estado-progreso';
      default:
        return 'estado-pendiente';
    }
  };

  return (
    <div className="tarea-card">
      <div className="tarea-header">
        <span className="tarea-numero">Tarea {tarea.numero}</span>
        <span className={`tarea-estado ${getEstadoClass()}`}>
          {tarea.estado.replace('-', ' ')}
        </span>
      </div>

      <h3 className="tarea-titulo">{tarea.titulo}</h3>
      
      <p className="tarea-descripcion">{tarea.descripcion}</p>

      {tarea.categoria && (
        <span className="tarea-categoria">{tarea.categoria}</span>
      )}

      <div className="tarea-footer">
        <span className="tarea-fecha">
          📅 {tarea.fechaPresentacion}
        </span>
        <button 
          className="tarea-btn"
          onClick={() => navigate(tarea.ruta)}
        >
          Ver Tarea →
        </button>
      </div>
    </div>
  );
};

export default TareaCard;