import React from "react";
import PropTypes from "prop-types";

const VoteButton = props => (
  <React.Fragment>
    <label
      className={props.selectedValue === props.value ? "labelFocus" : ""}
      htmlFor={`${props.name}-${props.value}`}
    >
      {props.value}
    </label>
    <input
      type="radio"
      id={`${props.name}-${props.value}`}
      name={`${props.name}`}
      value={`${props.value}`}
      onChange={props._onChangeRadioButton}
    />
  </React.Fragment>
);

VoteButton.propTypes = {
  // thumb: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired
};

export default VoteButton;
