import GalleryItem from "./GalleryItem";

import galeria1 from "../assets/galeria1.jpg";
import galeria2 from "../assets/galeria2.jpg";
import galeria3 from "../assets/galeria3.jpg";
import galeria4 from "../assets/galeria4.jpg";
import galeria5 from "../assets/galeria5.jpg";
import galeria6 from "../assets/galeria6.jpg";
import galeria7 from "../assets/galeria7.jpg";
import galeria8 from "../assets/galeria8.jpg";

function Gallery() {
  //listado de imágenes que se muestran en la galería//
  const imagenes = [
    {
      src: galeria1,
      alt: "Producto 1"
    },
    {
      src: galeria2,
      alt: "Producto 2"
    },
    {
      src: galeria3,
      alt: "Producto 3"
    },
    {
      src: galeria4,
      alt: "Producto 4"
    },
    {
      src: galeria5,
      alt: "Producto 5"
    },
    {
      src: galeria6,
      alt: "Producto 6"
    },
    {
      src: galeria7,
      alt: "Producto 7"
    },
    {
      src: galeria8,
      alt: "Producto 8"
    }
  ];

  return (
    <section id="galeria">
      <h2>Galería</h2>

      <div className="contenedor-galeria">
        {/*generar cada imagen utilizando el componente GalleryItem*/}
        {imagenes.map((imagen) => (
          <GalleryItem
            key={imagen.src}
            src={imagen.src}
            alt={imagen.alt}
          />
        ))}
      </div>

      <p>
        Próximamente conocerás algunos de nuestros productos destacados.
      </p>
    </section>
  );
}

export default Gallery;