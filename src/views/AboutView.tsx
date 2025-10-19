import logoScesiLearn from "../assets/LogoSCESILEARN.jpg";
import { afichesArrayAssets } from "../assets/afiches/afiches";
import "../styles/views/AboutView.css";
import { useState } from "react";

const AboutView = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="about-container">
      <img src={logoScesiLearn} alt="Logo SCESI LEARN" className="about-logo" />

      <h1 className="about-title">Impulsa tu conocimiento y descubre nuevas habilidades</h1>

      <p className="about-text">
        <strong>SCESI LEARN</strong> es una iniciativa de la{" "}
        <a
          href="https://scesi.umss.edu.bo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sociedad Científica de Estudiantes de Sistemas e Informática (SCESI)
        </a>
        , que ofrece cursos de temporada sobre diversas tecnologías para estudiantes
        de la Universidad Mayor de San Simón y público en general.  
        El objetivo es recaudar fondos para apoyar las actividades de la SCESI.
      </p>

      <button className="about-button">Regístrate aquí</button>

      <p className="about-subtitle">Explora nuestro catálogo:</p>

      <div className="afiches-grid">
        {afichesArrayAssets.map((afiche, index) => (
          <img
            key={index}
            src={afiche}
            alt={`Afiche ${index}`}
            className="afiche-img"
            onClick={() => setSelectedImage(afiche)}
          />
        ))}
      </div>

      {/* Modal para ampliar afiche */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Vista ampliada" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default AboutView;
