import PropTypes from "prop-types";

function GalleryItem({ src, alt }) {
  return (
    <img src={src} alt={alt} />
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default GalleryItem;