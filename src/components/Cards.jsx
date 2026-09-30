import Card from "./Card";

import juguete1 from "../assets/juguete1.jpg";
import juguete2 from "../assets/juguete2.jpg";
import juguete3 from "../assets/juguete3.jpg";

function Cards() {
  //datos para generar las tarjetas de productos//
  const productos = [
    {
      imagen: juguete1,
      alt: "Muñeco",
      titulo: "Muñecos",
      descripcion: "Gran variedad de personajes para todas las edades."
    },
    {
      imagen: juguete2,
      alt: "Juego de mesa",
      titulo: "Juegos de Mesa",
      descripcion: "Diversión para compartir con amigos y familia."
    },
    {
      imagen: juguete3,
      alt: "Peluche",
      titulo: "Peluches",
      descripcion: "Suaves, coloridos y perfectos para regalar."
    }
  ];

  return (
    <section id="productos">
      <h2>Productos destacados</h2>

      <div className="contenedor-productos">
        {/*recorrido por los listados y enviar datos mediante props*/}
        {productos.map((producto) => (
          <Card
            key={producto.titulo}
            imagen={producto.imagen}
            alt={producto.alt}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;