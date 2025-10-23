import { useState } from "react";

const Tarea5ViewRegistro = () => {
    //REGISTRO FACEBOOK
    //Estados para el formulario de registro de Facebook
    const [nombre, setNombre] = useState<string>("");
    const [apellido, setApellido] = useState<string>("");
    const [fechaNacimientoDia, setFechaNacimientoDia] = useState<number>(0);
    const [fechaNacimientoMes, setFechaNacimientoMes] = useState<number>(0);
    const [fechaNacimientoAnio, setFechaNacimientoAnio] = useState<number>(0);
    const [genero, setGenero] = useState<number>(0);
    const [generoPersonalizado, setGeneroPersonalizado] = useState<string>("");
    const [CeluCorreo, setCeluCorreo] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        let generoFinal = "";
        if (genero === 1) {
            generoFinal = "Mujer";
        } else if (genero === 2) {
            generoFinal = "Hombre";
        } else if (genero === -1) {
            generoFinal = generoPersonalizado;
        }
        alert(
        `El nombre ingresado es: ${nombre} \nEl apellido ingresado es: ${apellido} \nTu fecha de nacimiento es: ${fechaNacimientoDia} / ${fechaNacimientoMes} / ${fechaNacimientoAnio} 
        \nTu genero es: ${generoFinal} \nEl celular o correo es: ${CeluCorreo} \nLa contraseña ingresada es: ${password}`
        );
    }; 

    //REGISTRO TIKTOK POR NUMERO DE CEL
    //Estados para el formulario de registro de TIKTOK
    const [fechaNacimientoDiaTk, setFechaNacimientoDiaTk] = useState<number>(0);
    const [fechaNacimientoMesTk, setFechaNacimientoMesTk] = useState<number>(0);
    const [fechaNacimientoAnioTk, setFechaNacimientoAnioTk] = useState<number>(0);
    const [CodTelefonoTk, setCodTelefonoTk] = useState<string>("");
    const [NumTelefonoTk, setNumTelefonoTk] = useState<number>(0);
    const [codigoVerificacionTk, setCodigoVerificacionTk] = useState<string>("");

    const handleSubmitTk = (e: React.FormEvent) => {
        e.preventDefault();
        
        alert(
        `Tu fecha de nacimiento es: ${fechaNacimientoDiaTk} / ${fechaNacimientoMesTk} / ${fechaNacimientoAnioTk} 
        \nTu código de teléfono es: ${CodTelefonoTk} \nTu número de teléfono es: ${NumTelefonoTk} \nEl código de verificación es: ${codigoVerificacionTk}`
        );
    }; 

return (
    <>
    <div>
        <h2>REGISTRO FACEBOOK</h2>
        <button onClick={() => window.open("https://www.facebook.com/r.php")}>
            Link
        </button>
        <form method="post" action="#" onSubmit={handleSubmit}>
        
        <label htmlFor="firstname">Nombre</label>
        <input type="text" 
            id="firstname" 
            name="firstname" 
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required />

        <label htmlFor="lastname">Apellido</label>
        <input type="text" 
            id="lastname" 
            name="lastname" 
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required />

        <div>
            <label>Fecha de nacimiento</label>
        <select name="birthday_day"
            value={fechaNacimientoDia}
            onChange={(e) => setFechaNacimientoDia(Number(e.target.value))}>
            <option value="">Día</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>      
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>  
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
        </select>
        <select name="birthday_month"
            value={fechaNacimientoMes}
            onChange={(e) => setFechaNacimientoMes(Number(e.target.value))}>
            <option value="">Mes</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
        </select>
        <select name="birthday_year"
            value={fechaNacimientoAnio}
            onChange={(e) => setFechaNacimientoAnio(Number(e.target.value))}>
            <option value="">Año</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        </select>
        </div>

        <div>
            <label>Género</label>
            <input type="radio" checked={genero === 1} onChange={() => setGenero(1)}/> Mujer
            <input type="radio" checked={genero === 2} onChange={() => setGenero(2)}/> Hombre
            <input type="radio" checked={genero === -1} onChange={() => setGenero(-1)}/> Personalizado

            {genero === -1 && (
                <div>
                    <label>Especifica tu género</label>
                    <input type="text" 
                        placeholder="Ingresa tu género" 
                        onChange={(e) => setGeneroPersonalizado(e.target.value)}
                        />
                </div>
            )}
        </div>

        <div>
            <label>Número de celular o correo electrónico</label>
            <input type="text" 
                placeholder="Celular o correo electrónico"
                maxLength={8}
                value={CeluCorreo}
                onChange={(e) => setCeluCorreo(e.target.value)}
                required />
        </div>

        <div>
            <label>Contraseña nueva</label>
            <input type="password" 
                placeholder="Contraseña nueva"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
        </div>

        <button type="submit">Registrarte</button>

        </form>
    </div>

    <div>
        <h2>REGISTRO TIKTOK POR NUMERO DE CEL</h2>
        <button onClick={() => window.open("https://www.tiktok.com/signup/phone-or-email/phone")}>
            Link
        </button>
        <form action="#" onSubmit={handleSubmitTk}>
        

        <div>
            <label>Fecha de nacimiento</label>

            <select name="day" 
            value={fechaNacimientoDiaTk}
            onChange={(e) => setFechaNacimientoDiaTk(Number(e.target.value))}
            required>
            <option value="">Día</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>

            </select>
            
            <select name="month" 
            value={fechaNacimientoMesTk}
            onChange={(e) => setFechaNacimientoMesTk(Number(e.target.value))}
            required>
            <option value="">Mes</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
            </select>

            <select name="year"
                value={fechaNacimientoAnioTk}
                onChange={(e) => setFechaNacimientoAnioTk(Number(e.target.value))}>
                <option value="">Año</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>

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
    )
}

export default Tarea5ViewRegistro;