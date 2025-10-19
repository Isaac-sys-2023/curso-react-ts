import "../../styles/layout/Footer.css";
import logoScesi from "../../assets/LogoSCESI.svg";
import facebook from "../../assets/redes-sociales/facebook.svg";
import instagram from "../../assets/redes-sociales/instagram.svg";
import tikTok from "../../assets/redes-sociales/tik-tok.svg";
import twitter from "../../assets/redes-sociales/twitter.svg";
import youtube from "../../assets/redes-sociales/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <a href="https://www.scesi.org/">
          <img className="scesi" src={logoScesi} alt="Logo SCESI" />
        </a>
        <div className="siguenos">
          <p>Siguenos en:</p>
          <div className="img-redes">
            <a href="https://www.facebook.com/scesi">
              <img className="red" src={facebook} alt="Facebook SCESI" />
            </a>
            <a href="https://www.instagram.com/scesiumss">
              <img className="red" src={instagram} alt="Instagram SCESI" />
            </a>
            <a href="https://www.tiktok.com/@scesiumss">
              <img className="red" src={tikTok} alt="Tik Tok SCESI" />
            </a>
            <a href="https://x.com/ScesiU">
              <img className="red" src={twitter} alt="X SCESI" />
            </a>
            <a href="https://www.youtube.com/@scesiUmss">
              <img className="red" src={youtube} alt="Youtube SCESI" />
            </a>
          </div>
        </div>
      </div>

      <p>© 2025 SCECI LEARN — Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;