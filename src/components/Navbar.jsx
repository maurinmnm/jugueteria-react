import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/*Link para navegar entre las páginas sin recargar el sitio*/}

        <Link to="/" className="navbar-logo">
          Juguetería
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/productos">Productos</Link>
          </li>

          <li>
            <Link to="/galeria">Galería</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;