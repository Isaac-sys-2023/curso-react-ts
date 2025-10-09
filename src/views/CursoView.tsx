import { useLocation } from "react-router-dom";

const CursoView = () => {
    const location = useLocation();

    const {myCurso, mensaje, numero} = location.state || {};
    return(<>
        <h1>{mensaje} {numero}</h1>
        <h1>{myCurso.titulo}</h1>
    </>)
}

export default CursoView;