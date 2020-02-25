import React, { Component } from "react";
import SimpleStorage from "react-simple-storage";
import "./App.css";
import VotingBox from "./components/VotingBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "Kanye West",
          up: 64,
          down: 36
        },
        { name: "Mark Zuckerberg", up: 36, down: 64 },
        { name: "Cristina Fernández de Kirchner", up: 36, down: 64 },
        { name: "Malala Yousafzai", up: 64, down: 36 }
      ]
    };
  }

  voteUP = name => {
    this.setState(prevState => ({
      persons: prevState.persons.map(e =>
        e.name === name ? { ...e, up: (e.up += 1) } : e
      )
    }));
  };

  voteDOWN = name => {
    this.setState(prevState => ({
      persons: prevState.persons.map(e =>
        e.name === name ? { ...e, down: (e.down += 1) } : e
      )
    }));
  };

  VotingBoxes = () => (
    <div>
      {this.state.persons.map((p, index) => (
        <VotingBox
          key={index}
          name={p.name}
          up={p.up}
          down={p.down}
          voteUP={this.voteUP}
          voteDOWN={this.voteDOWN}
        />
      ))}
    </div>
  );

  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        {this.VotingBoxes()}
      </div>
    );
  }
}

export default App;
