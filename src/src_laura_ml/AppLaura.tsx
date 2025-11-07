import { Routes, Route } from "react-router-dom";
import TareaView5 from "/curso-react-ts/src/src_laura_ml/view/TareaView5";
import TareaView5p2 from "./componentes/TareaView5p2";

function AppLaura() {
  return (
    <>
      <Routes>
        <Route path="/laura/Tarea" element={<TareaView5 />} />
        <Route path="/laura/Tarea5" element={<TareaView5p2 />} />
        {/* <Route path="/laura" element={<TareaView5 />} /> */}
      </Routes>
    </>
  );
}
export default AppLaura;
