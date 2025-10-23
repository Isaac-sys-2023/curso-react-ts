export interface Producto{
    nombre: string;
    descripcion: string;
    precio: number;
}

interface ProductoConDescuento2 extends Producto{
    descuento:number;
}

export type ProductoType = {
    nombre: string;
    descripcion: string;
    precio: number;
}

type ConDescuento = {
  descuento: number;
};

type ProductoConDescuento = ProductoType & ConDescuento;

export interface Empresa{
    nombreEmpresa: string;
    direccion: string;
}

interface ProductProps {
    producto: Producto;
    empresa: Empresa;    
}

function CardProducto({ producto, empresa }: ProductProps) {
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio} Bs</p>
            <p>Hecho por: {empresa.nombreEmpresa}</p>
            <p>Hecho en: {empresa.direccion}</p>
        </div>
    );
}

export default CardProducto;