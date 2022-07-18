import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
// import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        {/* <Header></Header>s */}
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        ></Menu>
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        ></DishDetail> */}
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/menu"
            component={() => {
              <Menu dishes={this.state.dishes}></Menu>;
            }}
          ></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
