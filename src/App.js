// import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Welcome } from "./Components/Welcome";
import { Comment } from "./Components/Comment";
import Car from "./Components/Car";
import Menu from "./Components/MenuComponent";
import { Component } from "react";
import { DISHES } from "./shared/dishes";

const comment = {
  date: new Date(),
  text: "I hope you enjoy my restaurant",
  author: { name: "alberto", avatarUrl: "./assets/images/alberto.png" },
};
class App extends Component {
  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>

  //   <div className="App">
  //     <Navbar dark color="primary">
  //       <div className="container">
  //         <NavbarBrand>Ristorante Con Fusion</NavbarBrand>
  //       </div>
  //     </Navbar>
  //     <Welcome name="Tuan"></Welcome>
  //     <Welcome name="Van"></Welcome>
  //     <Welcome name="Thuy van"></Welcome>

  //     <Comment
  //       date={comment.date}
  //       text={comment.text}
  //       author={comment.author}
  //     ></Comment>
  //     <Car></Car>
  //     <Menu></Menu>
  //   </div>
  // );
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
}

export default App;
