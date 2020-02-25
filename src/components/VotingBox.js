import React, { Component } from "react";
import PropTypes from "prop-types";
import PersonPhoto from "./PersonPhoto.js";
import VoteTotal from "./VoteTotal.js";
import Modal from "./Modal.js";
import VoteButton from "./VoteButton.js";

class VotingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: { name: "", value: "" },
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.handleSubmit();
    this.setState({ show: false });
  };
  _onChangeRadioButton = (e, data) => {
    this.setState({ selected: { name: e.target.name, value: e.target.value } });
  };

  handleSubmit() {
    if (this.state.selected.name !== "") {
      if (this.state.selected.value === "up") {
        this.props.voteUP(this.state.selected.name);
        this.showModal();
      } else {
        this.props.voteDOWN(this.state.selected.name);
        this.showModal();
      }
    }
  }

  render() {
    const { name, up, down } = this.props;
    return (
      <div>
        <PersonPhoto name={name} up={up} down={down} />
        {this.state.show ? <Modal handleClose={this.hideModal}></Modal> : null}
        <VoteButton
          name={name}
          selectedValue={this.state.selected.value}
          value="up"
          _onChangeRadioButton={this._onChangeRadioButton}
        />
        <VoteButton
          name={name}
          selectedValue={this.state.selected.value}
          value="down"
          _onChangeRadioButton={this._onChangeRadioButton}
        />
        <button onClick={this.handleSubmit}>Vote now</button>

        <VoteTotal up={up} down={down} />
      </div>
    );
  }
}

VotingBox.propTypes = {
  name: PropTypes.string.isRequired,
  up: PropTypes.number.isRequired,
  down: PropTypes.number.isRequired
};

export default VotingBox;
