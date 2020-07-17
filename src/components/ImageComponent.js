import PropTypes from "prop-types";
import React from "react";

export const ImageComponent = ({ image, x, y }) => {
  return (
    <>
      <img
        id="image"
        alt="Project"
        src={image}
        style={{
          top: y,
          left: x,
        }}
      />
    </>
  );
};
export default ImageComponent;

ImageComponent.propTypes = {
  image: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
}
