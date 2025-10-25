import type { Tutor } from "../types/Tutor";
import isaacImage from "../assets/estsReact/ig.png";
import orlandoImage from "../assets/estsReact/oav.png";

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
  {
    nombre: "Orlando",
    apellidos: "Altamirano Vargas",
    imagen: orlandoImage,
    descripcion: "Que alguien pare el semestre alv",
    fechaNacimiento: "06-08-1825",
    redes: [
      { nombre: "Github", url: "https://github.com/0RLAND0-AV", img: redesAssets.github },
      { nombre: "Tik Tok", url: "sin titktok", img: redesAssets.tikTok },
      { nombre: "YouTube", url: "sin yt", img: redesAssets.youtube },
      { nombre: "Linkedin", url: "https://www.linkedin.com/in/orlando-a-v-98b3672b7/", img: redesAssets.linkedln },
    ],

    tareasUrl: "/tareasOAV", //Aqui va su url por defecto Ejemplo: /tareasOAV
  },
]