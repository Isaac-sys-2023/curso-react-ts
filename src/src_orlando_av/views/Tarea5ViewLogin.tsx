import { useState } from "react";

const Tarea5ViewLogin = () => {
    const [CeluCorreo, setCeluCorreo] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(
            `El celular o correo es: ${CeluCorreo} \nLa contraseña ingresada es: ${password}`
        );
    };

    const [CodTelefonoTk, setCodTelefonoTk] = useState<string>("");
    const [NumTelefonoTk, setNumTelefonoTk] = useState<number>(0);
    const [codigoVerificacionTk, setCodigoVerificacionTk] = useState<string>("");

    const handleSubmitTk = (e: React.FormEvent) => {
        e.preventDefault();
        
        alert(
        `Tu código de teléfono es: ${CodTelefonoTk} \nTu número de teléfono es: ${NumTelefonoTk} \nEl código de verificación es: ${codigoVerificacionTk}`
        );
    }; 

    return (
        <>
            <div>
                <h2>LOGIN FACEBOOK</h2>
                <button onClick={() => window.open("https://www.facebook.com/login")}>
                    Link
                </button>
                
                <form method="post" action="#" onSubmit={handleSubmit}>
                    Iniciar sesion en facebook
                    <div>
                        <label htmlFor="email">Correo electrónico o teléfono</label>
                        <input
                            type="email"
                            placeholder="Correo electronico o numero de telefono"
                            required
                            value={CeluCorreo}
                            onChange={e => setCeluCorreo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>




    <div>
        <h2>LOGIN TIKTOK</h2>
        <button onClick={() => window.open("https://www.tiktok.com/login/phone-or-email")}>
            Link
        </button>
        <form action="#" onSubmit={handleSubmitTk}>
        

        <div>
            <select name="codigoCel" value={CodTelefonoTk} onChange={(e) => setCodTelefonoTk(String(e.target.value))} required>
                <option value="">Codigo</option>
                <option value="+591 Bol">+591 Bol</option>
                <option value="+52 Mex">+52 Mex</option>
                <option value="+57 Col">+57 Col</option>
            </select>
            <label>Teléfono</label>
            <input type="text" maxLength={10} placeholder="Número de teléfono" value={NumTelefonoTk} onChange={(e) => setNumTelefonoTk(Number(e.target.value))} required />
        </div>

        <div>
            <label>Código de verificación</label>
            <input type="text" maxLength={6} minLength={6} placeholder="Ingresa el código de 6 dígitos" value={codigoVerificacionTk} onChange={(e) => setCodigoVerificacionTk(e.target.value)} required />
            <button type="submit">Enviar código</button>
        </div>

        {/* <button type="submit">Siguiente</button> */}

        </form>

    </div>

        </>
    );
};

export default Tarea5ViewLogin;