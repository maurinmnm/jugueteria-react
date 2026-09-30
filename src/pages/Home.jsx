import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-texto">
        <h2>Bienvenidos a nuestra juguetería</h2>

        <p>
          Encontrá los mejores juguetes para todas las edades.
        </p>

        {/*Link que permite acceder directamente a la sección de productos*/}
        <Link to="/productos">
          Ver productos
        </Link>
      </div>
    </section>
  );
}

export default Home;