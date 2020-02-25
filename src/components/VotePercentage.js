import React from "react";
import PropTypes from "prop-types";

const VotePercentage = props => {
  return (
    <div
      style={{
        backgroundColor: props.color.backgroundColor,
        width: `${Math.round(props.percentage)}%`
      }}
    >
      {Math.round(props.percentage)}%
    </div>
  );
};

VotePercentage.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default VotePercentage;
