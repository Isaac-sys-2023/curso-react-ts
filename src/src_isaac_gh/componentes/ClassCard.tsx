import { Link } from "react-router-dom";
import type { Clase } from "../types/Clase";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';

import "../styles/componentes/ClassCard.css";

interface ClassCardProps {
  clase: Clase;
}

const ClassCard = ({ clase }: ClassCardProps) => {
    const [value, setValue] = React.useState<number | null>(0);
  return (
    <div className="class-card-container">
      <h1 className="class-card-title">Clase Nº{clase.nroClase}</h1>
      <Divider className="divider" variant="middle"/>
      <h2 className="class-card-subtitle">{clase.titulo}</h2>
      <p className="class-card-descripcion">{clase.descripcion}</p>
      <p className="class-card-descripcion">{clase.fecha}</p>

      <p className={`class-card-descripcion ${clase.grabada === true ? "grabada" : "no-grabada"}`}>{clase.grabada === true ? "Grabada" : "No Grabada"}</p>

    <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Link className="class-card-link" to={clase.url}>Ver Clase</Link>
    </div>
  );
};

export default ClassCard;
