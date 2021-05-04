import React from "react";

export default class CountApp extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div style={{ margin: "100px" }}>
        <h1>{this.state.number}</h1>
      </div>
    );
  }
}
