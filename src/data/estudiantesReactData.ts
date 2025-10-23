import type { Tutor } from "../types/Tutor";
import isaacImage from "../assets/estsReact/ig.png";
import { redesAssets } from "../assets/redes-sociales/redes";

export const estudiantesReact: Tutor[] = [
  {
    nombre: "Isaac",
    apellidos: "Gutierrez Huarachi",
    imagen: isaacImage,
    descripcion: "Ejemplo para los estudiantes",
    fechaNacimiento: "21-06-2004",
    redes: [
      { nombre: "Github", url: "https://github.com/Isaac-sys-2023", img: redesAssets.github },
      { nombre: "Tik Tok", url: "https://www.tiktok.com/@just_an_average_isaac", img: redesAssets.tikTok },
      { nombre: "YouTube", url: "https://www.youtube.com/@iser7920", img: redesAssets.youtube },
      { nombre: "Linkedin", url: "https://www.linkedin.com/in/isaac-gutierrez-huarachi", img: redesAssets.linkedln },
    ],

    tareasUrl: "/tareasOAV", //Aqui va su url por defecto Ejemplo: /tareasOAV
  },
]