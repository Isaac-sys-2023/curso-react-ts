interface PropsOAV{
    nombre: string,
    edad: number,
    descripcion: string,
}


const PresentacionOAV = ({nombre, edad, descripcion}: PropsOAV) => { 
    return (
        <>
            <h2>Nombre: {nombre}</h2>
            <p>Descripcion: {descripcion}</p>
            <p>Edad: {edad}</p>
        </>
    );
}

export default PresentacionOAV;