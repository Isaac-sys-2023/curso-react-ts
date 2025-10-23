interface PropsYLCC{
    nombre: string,
    edad: number,
    descripcion: string,
}


const PresentacionYLCC = ({nombre, edad, descripcion}: PropsYLCC) => {
    return (

        <>
            <h2>Nombre: {nombre}</h2>
            <p>Descripcion: {descripcion}</p>
            <p>Edad: {edad}</p>
        </>
    );
}

export default PresentacionYLCC;