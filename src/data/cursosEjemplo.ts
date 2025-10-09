import type { Curso } from "../types/Curso";
import { tutoresAssets } from "../assets/tutores/tutores";
import { cursosAssets } from "../assets/cursos/cursos";
import { afichesAssets } from "../assets/afiches/afiches";

export const cursosEjemplo: Curso[] = [
  {
    titulo: "Introducción para diseño y manejo de Router CNC con AutoCAD y ArtCAM",
    descripcion:
      "Este curso está diseñado para introducir a los estudiantes en el uso de routers CNC aplicados al trabajo en madera, combinando el diseño en AutoCAD con la programación de trayectorias en ArtCAM. A lo largo de cinco módulos, los participantes aprenderán desde los fundamentos del CNC y la seguridad en el taller, hasta la creación de proyectos completos listos para mecanizar en la máquina.",
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
        apellidos: "Martínez",
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
    imgCurso: cursosAssets.imgAutocadCursos,
    aficheImg: afichesAssets.imgAutocadAfiche,
  },
  {
    titulo: "Introducción a la Web con HTML y CSS",
    descripcion:
      "Este curso está diseñado para introducir a los estudiantes al desarrollo web con HTML y CSS, los lenguajes fundamentales para la creación de páginas web. Se aprenderá a estructurar sitios, darles estilo y hacerlos adaptables a diferentes dispositivos. Ideal para quienes quieran dar sus primeros pasos en la programación web.",
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
        imagen: tutoresAssets.imgJE,
      },
    ],
    precioGeneral: 50,
    precioUMSS: 45,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: cursosAssets.imgHTMLCursos,
    aficheImg: afichesAssets.imgHTMLAfiche,
  },
  {
    titulo: "Desarrollo en Android",
    descripcion:
      "Curso introductorio de cómo crear una aplicación Android nativa. No quiero hacer mucho foco en la construcción de interfaces, sino más bien en cómo funciona el desarrollo Android, estructura de carpetas, qué patrón de diseño usar y algunas buenas prácticas.",
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
        imagen: tutoresAssets.imgMA,
      },
    ],
    precioGeneral: 80,
    precioUMSS: 70,
    status: "Por Iniciar",
    estaCancelado: false,
    imgCurso: cursosAssets.imgAndroidCursos,
    aficheImg: afichesAssets.imgAndroidAfiche,
  },
  {
    titulo: "Linux a tu manera: Introducción y Personalización",
    descripcion:
      "Este curso se divide en dos módulos: en el primero, aprenderás los fundamentos de Linux en Debian, estructura y uso básico de la terminal; en el segundo, explorarás la personalización del sistema mediante la configuración de la terminal, el uso de window managers y la comprensión de los servidores gráficos Xorg y Wayland, para crear un entorno adaptado a tu estilo.",
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
        apellidos: "Ramírez",
        imagen: tutoresAssets.imgRR,
      },
      {
        nombre: "Steven",
        apellidos: "Ramos",
        imagen: tutoresAssets.imgSR,
      },
    ],
    precioGeneral: 80,
    precioUMSS: 70,
    status: "Por Iniciar",
    estaCancelado: false,
    imgCurso: cursosAssets.imgLinuxCursos,
    aficheImg: afichesAssets.imgLinuxAfiche,
  },
  {
    titulo: "Introducción y fundamentos de programación en Python",
    descripcion:
      "El curso de Introducción y Fundamentos de Programación en Python te permitirá dar tus primeros pasos en la programación, aprendiendo conceptos básicos como variables, estructuras de control, funciones y lógica computacional. No necesitas experiencia previa y, al finalizar, tendrás una base sólida para desarrollar proyectos propios y avanzar en desarrollo de software, ciencia de datos o inteligencia artificial.",
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
        apellidos: "Ordoñez",
        imagen: tutoresAssets.imgCO,
      },
      {
        nombre: "Cecilia",
        apellidos: "Vargas",
        imagen: tutoresAssets.imgCV,
      },
    ],
    precioGeneral: 70,
    precioUMSS: 60,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: cursosAssets.imgPythonCursos,
    aficheImg: afichesAssets.imgPythonAfiche,
  },
  {
    titulo: "Introducción al Machine Learning",
    descripcion:
      "Introducción a conceptos de machine learning con Python, Polars, Matplotlib y Scikit-Learn, desarrollada de forma clara y progresiva. El curso incluye ejemplos prácticos que permiten comprender mejor cada técnica y reforzar el aprendizaje a través de la aplicación directa de los conceptos vistos.",
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
        imagen: tutoresAssets.imgPA,
      },
    ],
    precioGeneral: 60,
    precioUMSS: 54,
    status: "En Progreso",
    estaCancelado: true,
    imgCurso: cursosAssets.imgManchineCursos,
    aficheImg: afichesAssets.imgManchineAfiche,
  },
  {
    titulo: "Construcción de chatbots con LangChain",
    descripcion:
      "¿Quieres crear asistentes inteligentes? En este curso aprenderás a usar LangChain y modelos de lenguaje para desarrollar chatbots desde cero. Verás prompts, embeddings, bases vectoriales y RAG de forma práctica y sencilla.",
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
        imagen: tutoresAssets.imgWP,
      },
    ],
    precioGeneral: 120,
    precioUMSS: 99,
    status: "Por Iniciar",
    estaCancelado: true,
    imgCurso: cursosAssets.imgLangChainCursos,
    aficheImg: afichesAssets.imgLangChainAfiche,
  },
  {
    titulo: "React con TypeScript",
    descripcion:
      "Este curso busca preparar a los estudiantes para enfrentar las materias de Ingeniería de Software y Taller de Ingeniería de Software, con un enfoque práctico en el desarrollo frontend moderno. El curso se divide en 2 fases: (1) un proyecto individual de portafolio en React con TypeScript (2) un proyecto grupal en React con TypeScript que aplica GitFlow y consumo de APIs.",
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
        apellidos: "Gutiérrez",
        imagen: tutoresAssets.imgIG,
        githubUrl: "https://github.com/Isaac-sys-2023"
      },
    ],
    precioGeneral: 110,
    precioUMSS: 99,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: cursosAssets.imgReactCursos,
    aficheImg: afichesAssets.imgReactAfiche,
  },
  {
    titulo: "Desarrollo Backend con JavaScript/TypeScript",
    descripcion:
      "Domina el desarrollo backend con Node.js y TypeScript. En este curso práctico, construirás APIs escalables y seguras, gestionando bases de datos relacionales y NoSQL. Te enfocarás en la autenticación con JWT, el control de roles y la implementación de un stack completo para producción con Docker y Jest para las pruebas.",
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
        imagen: tutoresAssets.imgAO,
      },
    ],
    precioGeneral: 149,
    precioUMSS: 134,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: cursosAssets.imgBackendCursos,
    aficheImg: afichesAssets.imgBackendAfiche,
  },
  {
    titulo: "Introducción al Diseño y Desarrollo de Videojuegos con Godot",
    descripcion:
      "En este curso se presentará una introducción a los conceptos fundamentales del diseño de videojuegos, incluyendo el diseño de niveles, de personajes y de mecánicas. Además, se abordará el uso de la herramienta Godot Engine para la creación de videojuegos en 2D y 3D, explorando de manera sencilla la lógica y codificación necesarias para dar vida a estos proyectos.",
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
        imagen: tutoresAssets.imgDR,
      },
    ],
    precioGeneral: 120,
    precioUMSS: 108,
    status: "En Progreso",
    estaCancelado: false,
    imgCurso: cursosAssets.imgGodotCursos,
    aficheImg: afichesAssets.imgGodotAfiche,
  },
];
