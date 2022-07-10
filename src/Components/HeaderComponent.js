import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, Jumbotron } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience
              </p>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
