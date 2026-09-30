import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Layout>
      {/* Definimos las rutas principales de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Layout>
  );
}

export default App;