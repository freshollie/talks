import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  double() {
    this.setState({ number: this.state.number * 2 });
  }

  render() {
    return (
      <div style={{ margin: "100px" }}>
        <button onClick={() => this.double()}>Click me!</button>
        <h1>{this.state.number}</h1>
      </div>
    );
  }
}
