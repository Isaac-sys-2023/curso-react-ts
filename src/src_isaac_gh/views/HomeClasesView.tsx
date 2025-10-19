import ClassCard from "../componentes/ClassCard";
import type { Clase } from "../types/Clase";

import "../styles/views/HomeClasesView.css";

import bannerReact from "../../assets/bannerCursos.jpg";

const HomeClasesView = () => {
  const classes: Clase[] = [
    {
      id: 1,
      nroClase: 2,
      titulo: "Clase 2",
      descripcion: "Uso de componentes reutilizables y Props",
      url: "/clase2",
      fecha: "02 oct 2025",
      grabada: false,
    },
    {
      id: 2,
      nroClase: 3,
      titulo: "Clase 3",
      descripcion:
        "TSX, el ciclo de vida de un componente React, useState y el funcionamiento de las funciones",
      url: "/clase3",
      fecha: "04 oct 2025",
      grabada: false,
    },
    {
      id: 3,
      nroClase: 3.2,
      titulo: "Clase 3-1-2",
      descripcion: "Los types y objetos y su manejo como props",
      url: "/clase3-1-2",
      fecha: "04 oct 2025",
      grabada: true,
    },
    {
      id: 4,
      nroClase: 3.3,
      titulo: "Clase 3-1-3",
      descripcion: "Las listas y su manejo con objetos",
      url: "/clase3-1-3",
      fecha: "04 oct 2025",
      grabada: true,
    },
    {
      id: 5,
      nroClase: 7,
      titulo: "Clase 7",
      descripcion: "useState y el consumo basico de APIs",
      url: "/clase7",
      fecha: "14 oct 2025",
      grabada: false,
    },
    {
      id: 6,
      nroClase: 8,
      titulo: "Clase 8",
      descripcion:
        "Creacion de formularios basicos viendo todos los tipos de inputs",
      url: "/clase8",
      fecha: "15 oct 2025",
      grabada: false,
    },
    {
      id: 7,
      nroClase: 9,
      titulo: "Clase 9",
      descripcion:
        "Unificacion de estados en un FormData, unificacion de cambios de estado y validacion de formularios",
      url: "/clase9",
      fecha: "16 oct 2025",
      grabada: false,
    },
  ];

  return (
    <div className="classes-view-container">
      <h1 className="classes-view-titulo">Nuestras Clases</h1>

        <img className="banner-react" src={bannerReact} alt="React" />

      <p className="classes-view-descripcion">Todas nuestras clases</p>

      <div className="classes-view-list">
        {classes.map((classItem, index) => (
          <ClassCard clase={classItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeClasesView;
