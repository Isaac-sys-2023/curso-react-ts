import type { Curso } from "../types/Curso";
import { tutoresAssets } from "../assets/tutores/tutores";

export const cursosEjemplo: Curso[] = [
  {
    titulo: "Introducción para disenio y manejo de Router CNC con AutoCAD y ArtCAM",
    descripcion:
      "Este curso esta diseniado para introducir a los estudiantes en el uso de routers CNC aplicados al trabajo en madera, combinando el disenio en AutoCAD con la programacion de trayectorias en ArtCAM. A lo largo de cinco modulos, los participantes aprenderan desde los fundamentos del CNC y la seguridad en el taller, hasta la creacion de proyectos completos listos para mecaniar en la maquina.",
    fechaInicio: "2025-09-29",
    horarios: [
      { dia: "Lunes", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
      { dia: "Martes", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
      { dia: "Miércoles", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
    ],
    duracionEnSemanas: 3,
    tutores: [
      {
        nombre: "Laura",
        apellidos: "Martinez",
        imagen: tutoresAssets.imgLM,
      },
      {
        nombre: "Enzo",
        apellidos: "Castro",
        imagen: tutoresAssets.imgEC,
      },
    ],
    precioGeneral: 120,
    precioUMSS: 108,
    status: "Por Iniciar",
    estaCancelado: true,
    imgCurso: "/img/cursos/autocad.png",
    aficheImg:"/img/afiches/FB_IMG_1759843000753.jpg",
  },
  {
    titulo: "Introduccion a la Web con HTML y CSS",
    descripcion:
      "Este curso esta diseniado para introducir a los estudiantes al desarrollo web con HTML y CSS, los lenguajes fundamentales para la creacion de paginas web. Se aprendera a estructurar sitios, darles estilo y hacerlos adaptables a diferentes dispositivos. Ideal para quienes qieran dar sus primeros pasos en la programacion web.",
    fechaInicio: "2025-09-30",
    horarios: [
      { dia: "Martes", horaInicio: "17:00", horaFin: "21:00", modalidad: "virtual" },
      { dia: "Miércoles", horaInicio: "17:00", horaFin: "21:00", modalidad: "virtual" },
      { dia: "Viernes", horaInicio: "17:00", horaFin: "21:00", modalidad: "virtual" },
    ],
    duracionEnSemanas: 4,
    tutores: [
      {
        nombre: "Jonatan",
        apellidos: "Esprela",
        imagen: "/img/tutores/je.png",
      },
    ],
    precioGeneral: 50,
    precioUMSS: 45,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: "/img/cursos/html.png",
    aficheImg:"/img/afiches/FB_IMG_1759843003306.jpg",
  },
  {
    titulo: "Desarrollo en Android",
    descripcion:
      "Curso introductorio de como crear una aplicacion android nativa. No quiero hacer mucho foco en la construccion de interfaces, sino mas bien en como funciona el desarrollo android, estructura de carpetas, que patron de disenio usar y algunas buens practicas",
    fechaInicio: "2025-10-08",
    horarios: [
      { dia: "Lunes", horaInicio: "17:00", horaFin: "21:00", modalidad: "virtual" },
      { dia: "Miércoles", horaInicio: "17:00", horaFin: "21:00", modalidad: "virtual" },
      { dia: "Sábado", horaInicio: "17:00", horaFin: "21:00", modalidad: "virtual" },
    ],
    duracionEnSemanas: 8,
    tutores: [
      {
        nombre: "Mauricio",
        apellidos: "Apaza",
        imagen: "/img/tutores/ma.png",
      },
    ],
    precioGeneral: 80,
    precioUMSS: 70,
    status: "Por Iniciar",
    estaCancelado: false,
    imgCurso: "/img/cursos/android.png",
    aficheImg:"/img/afiches/FB_IMG_1759843006219.jpg",
  },
  {
    titulo: "Linux a tu manera: Introduccion y Personalizacion",
    descripcion:
      "Este curso se divide en dos modulos: en el primero, aprenderas los fundamentos de Linux en Debian, estructura y uso basico de la terminal; en el segundo, exploraras la personalizacion del sistema mediante la configuracion de la terminal, el uso de window managers y la comprension de los servidores graficos Xorg y Wayland, para crear un entrono adoptado a tu estilo.",
    fechaInicio: "2025-10-06",
    horarios: [
      { dia: "Lunes", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
      { dia: "Miércoles", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
      { dia: "Viernes", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
    ],
    duracionEnSemanas: 4,
    tutores: [
      {
        nombre: "Ricardo",
        apellidos: "Ramirez",
        imagen: "/img/tutores/rr.png",
      },
      {
        nombre: "Steven",
        apellidos: "Ramos",
        imagen: "/img/tutores/sr.png",
      },
    ],
    precioGeneral: 80,
    precioUMSS: 70,
    status: "Por Iniciar",
    estaCancelado: false,
    imgCurso: "/img/cursos/linux.jpeg",
    aficheImg:"/img/afiches/FB_IMG_1759843007998.jpg",
  },
  {
    titulo: "Introduccion y fundamentos de programacion programacion de python",
    descripcion:
      "El curso de Introduccion y Fundamentos de Programacion en Python te permitira dar tus primeros pasos en la programacion, aprendiendo conceptos basicos como variables, estructuras de controlfunciones y logica computacional. No necesitas experiencia previa y, al finalizarm tendras una base solida para desarrollar proyectos propios y avanzar en desarrollo de software, ciencia de datos o inteligencia artificial.",
    fechaInicio: "2025-09-29",
    horarios: [
      { dia: "Lunes", horaInicio: "17:15", horaFin: "18:45", modalidad: "presencial" },
      { dia: "Martes", horaInicio: "17:15", horaFin: "18:45", modalidad: "presencial" },
      { dia: "Miércoles", horaInicio: "17:15", horaFin: "18:45", modalidad: "presencial" },
      { dia: "Jueves", horaInicio: "17:15", horaFin: "18:45", modalidad: "presencial" },
      { dia: "Viernes", horaInicio: "17:15", horaFin: "18:45", modalidad: "presencial" },
    ],
    duracionEnSemanas: 3,
    tutores: [
      {
        nombre: "Candy",
        apellidos: "Ordonies",
        imagen: "/img/tutores/co.png",
      },
      {
        nombre: "Cecilia",
        apellidos: "Vargas",
        imagen: "/img/tutores/cv.png",
      },
    ],
    precioGeneral: 70,
    precioUMSS: 60,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: "/img/cursos/python.jpeg",
    aficheImg:"/img/afiches/FB_IMG_1759843010130.jpg",
  },
  {
    titulo: "Introduccion al Machine Learning",
    descripcion:
      "Introduccion a conceptos de machine learning con Python, Polars, Matplotlib y Scikit-Learn, desarrollada de forma clara y progresiva. El curso incluye ejemplos practicos que permiten comprender mejor cada tecnica y reforzar el aprendizaje a traves de la apliacion directa de los conceptos vistos.",
    fechaInicio: "2025-09-29",
    horarios: [
      { dia: "Lunes", horaInicio: "15:45", horaFin: "17:15", modalidad: "presencial" },
      { dia: "Martes", horaInicio: "15:45", horaFin: "17:15", modalidad: "presencial" },
      { dia: "Miércoles", horaInicio: "15:45", horaFin: "17:15", modalidad: "presencial" },
      { dia: "Jueves", horaInicio: "15:45", horaFin: "17:15", modalidad: "presencial" },
    ],
    duracionEnSemanas: 4,
    tutores: [
      {
        nombre: "Pablo",
        apellidos: "Azurduy",
        imagen: "/img/tutores/pa.png",
      },
    ],
    precioGeneral: 60,
    precioUMSS: 54,
    status: "En Progreso",
    estaCancelado: true,
    imgCurso: "/img/cursos/machine.jpeg",
    aficheImg:"/img/afiches/FB_IMG_1759843018121.jpg",
  },
  {
    titulo: "Construccion de chatbots con LangChain",
    descripcion:
      "¿Quieres crear asistentes inteligentes? En este curso aprenderas a usar LangChain y modelos de lenguaje para desarrollar chatbots desde cero. Veras prompts, embeddings, bases vectoriales y RAG de forma practica y sencilla",
    fechaInicio: "2025-09-30",
    horarios: [
      { dia: "Martes", horaInicio: "18:45", horaFin: "20:15", modalidad: "virtual" },
      { dia: "Jueves", horaInicio: "18:45", horaFin: "20:15", modalidad: "virtual" },
      { dia: "Sábado", horaInicio: "18:45", horaFin: "20:15", modalidad: "virtual" },
    ],
    duracionEnSemanas: 4,
    tutores: [
      {
        nombre: "Willy",
        apellidos: "Paz",
        imagen: "/img/tutores/wp.png",
      },
    ],
    precioGeneral: 120,
    precioUMSS: 99,
    status: "Por Iniciar",
    estaCancelado: true,
    imgCurso: "/img/cursos/langchain.png",
    aficheImg:"/img/afiches/FB_IMG_1759843020772.jpg",
  },
  {
    titulo: "React con Typescript",
    descripcion:
      "Este curso busca preparar a los estudiantes para enfrentar las materias de Ingenieria de Software y Taller de Ingenieria de Software, con un enfoque practico en el desarrollo frontend moderno. El curso se divide en 2 fases: (1) un proyecto individual de portafolio en React con TypeScript (2) un proyecto grupal en React con TypeScript que aplica GitFlow y consumo de APIs.",
    fechaInicio: "2025-10-01",
    horarios: [
      { dia: "Martes", horaInicio: "17:30", horaFin: "18:30", modalidad: "virtual" },
      { dia: "Miércoles", horaInicio: "17:30", horaFin: "18:30", modalidad: "virtual" },
      { dia: "Jueves", horaInicio: "17:30", horaFin: "18:30", modalidad: "virtual" },
      { dia: "Sábado", horaInicio: "17:30", horaFin: "18:30", modalidad: "virtual" },
    ],
    duracionEnSemanas: 6,
    tutores: [
      {
        nombre: "Isaac",
        apellidos: "Gutierrez",
        imagen: "/img/tutores/ig.png",
        githubUrl: "https://github.com/Isaac-sys-2023"
      },
    ],
    precioGeneral: 110,
    precioUMSS: 99,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: "/img/cursos/react.png",
    aficheImg:"/img/afiches/FB_IMG_1759843023192.jpg",
  },
  {
    titulo: "Desarrollo Backend con JavaScript/Typescript",
    descripcion:
      "Domina el desarrollo backend con Node.js y TypeScript. En este curso practico. construiras APIs escalables y seguras, gestionando bases de datos relacionales y NoSQL. Te enfocaras e la autenticacion don JWT, el control de roles y la implementacion de un stack completo para produccion con Docker y Jest para las pruebas.",
    fechaInicio: "2025-09-29",
    horarios: [
      { dia: "Lunes", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
      { dia: "Martes", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" },
      { dia: "Miércoles", horaInicio: "20:00", horaFin: "22:00", modalidad: "virtual" }
    ],
    duracionEnSemanas: 5,
    tutores: [
      {
        nombre: "Abdiel",
        apellidos: "Orellana",
        imagen: "/img/tutores/ao.png",
      },
    ],
    precioGeneral: 149,
    precioUMSS: 134,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: "/img/cursos/node.png",
    aficheImg:"/img/afiches/FB_IMG_1759843025507.jpg",
  },
  {
    titulo: "Introduccion al Disenio y Desarrollo de Videojuegos con Godot",
    descripcion:
      "En este curso se presentara una introduccion a los conceptos fundamentales del disenio de videojuegos, incluyendo el disenio de niveles, de personajes y de mecanicas. Ademas, se abordara el uso de la herramienta Godot Engine para la creacion de videojuegos en 2D y 3D, explorando de manera sencilla la logica y codificacion necesarias para dar vida a estos proyectos.",
    fechaInicio: "2025-09-29",
    horarios: [
      { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45", modalidad: "presencial" },
      { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45", modalidad: "presencial" },
      { dia: "Jueves", horaInicio: "11:15", horaFin: "12:45", modalidad: "presencial" },
    ],
    duracionEnSemanas: 8,
    tutores: [
      {
        nombre: "Daniel",
        apellidos: "Reque",
        imagen: "/img/tutores/dr.png",
      },
    ],
    precioGeneral: 120,
    precioUMSS: 108,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: "/img/cursos/godot.png",
    aficheImg:"/img/afiches/FB_IMG_1759843027784.jpg",
  },
];
