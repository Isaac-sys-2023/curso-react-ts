import type { Tech } from "../types/Tech";
import "../styles/componentes/TechSlider.css";

const TechSlider = ({ techs }: { techs: Tech[] }) => {
  const hasMultiple = techs.length > 1;
  return(
    <div className={hasMultiple ? "logos": "logos l-static"} id="logos">
      {/* <div className="logos-slide" id="slider">
        {techs.map((tech, index)=>(
          <img src={tech.imgUrl} alt={tech.nombre} key={index}/>
        ))}
      </div>

      <div className="logos-slide">
        {techs.map((tech, index) => (
          <img src={tech.imgUrl} alt={tech.nombre} key={`clone-${index}`} />
        ))}
      </div> */}
      {hasMultiple ? (
        <>
          <div className="logos-slide">
            {techs.map((tech, index) => (
              <img src={tech.imgUrl} alt={tech.nombre} key={index} />
            ))}
          </div>
          <div className="logos-slide">
            {techs.map((tech, index) => (
              <img src={tech.imgUrl} alt={tech.nombre} key={`clone-${index}`} />
            ))}
          </div>
        </>
      ) : (
        <div className="logos-slide static">
          {techs.map((tech, index) => (
            <img src={tech.imgUrl} alt={tech.nombre} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechSlider;
