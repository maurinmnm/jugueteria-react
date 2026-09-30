import PropTypes from "prop-types";

//componente reutilizable para mostrar cada imagen de la galería//
function GalleryItem({ src, alt }) {
  return <img src={src} alt={alt} />;
}

//validación de los datos recibidos mediante props//
GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default GalleryItem;