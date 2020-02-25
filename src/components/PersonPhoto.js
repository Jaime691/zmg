import React from "react";
import PropTypes from "prop-types";

const PersonPhoto = props => {
  return (
    <div>
      {props.up > props.down ? "Thumb Up " : "Thumb Down "}
      {props.name}
    </div>
  );
};

PersonPhoto.propTypes = {
  // image: PropTypes.string.isRequired,
};

export default PersonPhoto;
