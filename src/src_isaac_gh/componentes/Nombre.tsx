interface NombreProps{
    precio: number,
    titulo: string,
    descripcion: string,
}

function Nombre({precio, titulo, descripcion}: NombreProps){
    return(
        <>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>Precio: {precio}Bs</p>
        </>
    )
}

export default Nombre;