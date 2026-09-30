import PropTypes from "prop-types";

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

Card.propTypes = {
  imagen: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
};

export default Card;