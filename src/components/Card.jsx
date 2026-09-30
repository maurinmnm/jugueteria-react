import PropTypes from "prop-types";

//recibimos los datos del producto mediante props//
function Card({ imagen, alt, titulo, descripcion }) {
  return (
    <article>
      <img src={imagen} alt={alt} />

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <a href="#">Ver más</a>
    </article>
  );
}

//validar los tipos de datos recibidos mediante props//
Card.propTypes = {
  imagen: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
};

export default Card;