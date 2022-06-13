import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  start = (e) => {
    alert("Your car is ready by " + e.type);
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <button type="button" onClick={this.start}>
          start
        </button>
      </div>
    );
  }
}
