import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null };
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => console.log(err)
    );
  }
  render() {
    return (
      <div>
        Lattitude {this.state.latitude}
        {true && <SeasonDisplay p="null" b />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
