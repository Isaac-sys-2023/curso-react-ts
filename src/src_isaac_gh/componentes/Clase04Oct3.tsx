import { useState } from "react";

interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
    descripcion?: string;
}

function PerfilPersona() {
    const [persona, setPersona] = useState<Persona>({
        nombre: "Isaac",
        edad: 21,
        ciudad: "Cbba"
    });

    const [nombres, setNombres] = useState<string[]>(["Isaac", "María", "Luis"]);
    const [numeros, setNumeros] = useState<number[]>([21, 12, 10]);

    const [personas, setPersonas] = useState<Persona[]>([{
        nombre: "Isaac",
        edad: 21,
        ciudad: "Cbba"
    }, {
        nombre: "pepe",
        edad: 21,
        ciudad: "oruro"
    }, {
        nombre: "ruth",
        edad: 14,
        ciudad: "la paz",
        descripcion: "Hola"
    }])

    const cambiarCiudadconParametro = (newCiudad: string) => {
        setPersona({ ...persona, ciudad: newCiudad });
        console.log(persona);
    };

    const agregarDescripcion = (newdesc: string) => {
        setPersona({ ...persona, descripcion: newdesc });
        console.log(persona);
    };

    return (
        // <div>
        //     <h2>Perfil</h2>
        //     <p>Nombre: {persona.nombre}</p>
        //     <p>Edad: {persona.edad}</p>
        //     <p>Ciudad: {persona.ciudad}</p>
        //     {persona.descripcion ? (<p>{persona.descripcion}</p>) : (<></>)}
        //     <label>Ciudad</label>
        //     <input type="text" value={persona.ciudad} onChange={(e) => { cambiarCiudadconParametro(e.target.value) }} />
        //     <button onClick={()=>{cambiarCiudadconParametro("Oruro")}}>Agregar descripcion</button>
        // </div>
        <div>
            {
                personas.map((persona, index) => (
                    <div key={index}>
                        <h2>Perfil</h2>
                        <p>Nombre: {persona.nombre}</p>
                        <p>Edad: {persona.edad}</p>
                        <p>Ciudad: {persona.ciudad}</p>
                        {persona.descripcion ? (<p>{persona.descripcion}</p>) : (<></>)}
                        <label>Ciudad</label>
                        <input type="text" value={persona.ciudad} onChange={(e) => { cambiarCiudadconParametro(e.target.value) }} />
                        <button onClick={() => { cambiarCiudadconParametro("Oruro"); agregarDescripcion("Hola") }}>Agregar descripcion</button>
                    </div>
                ))
            }
        </div>
    );
}

export default PerfilPersona;