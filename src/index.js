import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude)
      return <div>Error : {this.state.errorMessage}</div>;
    if (!this.state.errorMessage && this.state.latitude)
      return <SeasonDisplay latitude={this.state.latitude} />;
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
