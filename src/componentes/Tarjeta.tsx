import "../styles/componentes/Tarjeta.css";

interface TarjetaProps {
  titulo: string;
  descripciones: string[];
  color?: string;
}

const Tarjeta = ({ titulo, descripciones, color="purple" }: TarjetaProps) => {
  return (
    <div className={`tarjeta ${color}`}>
      <h3 className={`tarjeta-title ${color}`}>{titulo}</h3>
      {descripciones.map((descripcion: string, index: number) => (
        <p className={`tarjeta-descripcion ${color}`} key={index}>{descripcion}</p>
      ))}
    </div>
  );
};
export default Tarjeta;
