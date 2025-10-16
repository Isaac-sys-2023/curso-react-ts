import CardProducto, { type Empresa, type Producto } from "../componentes/Clase04Oct2";

const ClaseOctCuatroDos = () =>{
    const producto1: Producto = {
        nombre: "Mouse inalámbrico",
        descripcion: "Mouse ergonómico con batería recargable.",
        precio: 120,
    }

    const empresa1: Empresa = {
        nombreEmpresa: "Asus",
        direccion: "Av. Heroinas y Av. Ayacucho",
    }

    return(
        <CardProducto producto={producto1} empresa={empresa1}/>
    );
}

export default ClaseOctCuatroDos;