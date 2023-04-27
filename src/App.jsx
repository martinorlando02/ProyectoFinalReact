import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Contacto from "./pages/Contacto"; */
import Inicio from "./pages/Inicio";
import MarcaDetail from "./pages/MarcaDetail";
import ZapatillasMarca from "./pages/ZapatillasMarcas";
/* import Productos from "./pages/Productos";
*/

function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route path="/" element={<Inicio/>} />
{/*           <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} /> */}
          <Route path="/" element={<MarcaDetail/>} />
          <Route path="/category/:category" element={<ZapatillasMarca/>} />
    </Routes>
    </div>
    </Router>
  );

}


export default App;
