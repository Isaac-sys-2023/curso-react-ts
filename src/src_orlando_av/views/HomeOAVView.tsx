// views/HomeOAVView.tsx
import TareaCard from "../componentes/TareaCard";
import type { Tarea } from "../types/Tareas";
import '../styles/views/HomeOAVView.css';

const HomeOAVView = () => {

  const tareas: Tarea[] = [
    {
      numero: 0,
      titulo: "Estados y Props",
      descripcion: "Manejo de estados y propiedades en componentes",
      fechaPresentacion: "02 Oct 2025",
      estado: "completada",
      ruta: "/tareasOAV/tarea0",
      categoria: "Frontend"
    },
    {
      numero: 1,
      titulo: "Uso de hook useState",
      descripcion: "Manejo del estado de variables para operaciones básicas con useState",
      fechaPresentacion: "05 Oct 2025",
      estado: "completada",
      ruta: "/tareasOAV/tarea1",
      categoria: "React Hooks"
    },
    {
      numero: 2,
      titulo: "Renderizado de componentes, rutas y props",
      descripcion: "Implementación de renderizado de componentes en React",
      fechaPresentacion: "09 Oct 2025",
      estado: "completada",
      ruta: "/tareasOAV/tarea2",
      categoria: "Navegación"
    },
    {
      numero: 4,
      titulo: "Uso de fetch consumo de Apis",
      descripcion: "Consumo de APIs externas con fetch y manejo de datos",
      fechaPresentacion: "15 Oct 2025",
      estado: "completada",
      ruta: "/tareasOAV/tarea4View",
      categoria: "Apis"
    },
    {
      numero: 5,
      titulo: "Formulario de Login",
      descripcion: "Autenticación de usuarios con formulario de login",
      fechaPresentacion: "17 Oct 2025",
      estado: "completada",
      ruta: "/tareasOAV/tarea5Login",
      categoria: "Autenticación"
    },
    {
      numero: 5,
      titulo: "Formulario de Registro",
      descripcion: "Registro de nuevos usuarios en la aplicación",
      fechaPresentacion: "17 Oct 2025",
      estado: "completada",
      ruta: "/tareasOAV/tarea5Registro",
      categoria: "Autenticación"
    }
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="tareas-grid">
          {tareas.map((tarea, index) => (
            <TareaCard key={`${tarea.numero}-${index}`} tarea={tarea} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOAVView;