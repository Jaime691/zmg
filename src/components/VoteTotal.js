import React from "react";
import PropTypes from "prop-types";
import VotePercentage from "./VotePercentage.js";

const styles = {
  totalWidth: {
    display: "flex",
    justifyContent: "center"
  },
  upColor: {
    backgroundColor: "#1CBBB4"
  },
  downColor: {
    backgroundColor: "#FFAD1D"
  }
};

const VoteTotal = props => {
  let total = props.up + props.down;
  let percentageUP =
    total === 0 ? 0 : (100 * props.up) / (props.up + props.down);
  let percentageDOWN =
    total === 0 ? 0 : (100 * props.down) / (props.up + props.down);

  return (
    <div style={styles.totalWidth}>
      <VotePercentage percentage={percentageUP} color={styles.upColor} />
      <VotePercentage percentage={percentageDOWN} color={styles.downColor} />
    </div>
  );
};

VoteTotal.propTypes = {
  up: PropTypes.number.isRequired,
  down: PropTypes.number.isRequired
};

export default VoteTotal;
