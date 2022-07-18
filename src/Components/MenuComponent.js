import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import DishDetail from "./DishdetailComponent";
// class Menu extends Component {
// constructor(props) {
//   super(props);
// }

function RenderMenuItem({ dish, onClick }) {
  return (
    // <Card onClick={() => onClick(dish.id)}>
    //   <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
    //   <CardImgOverlay>
    //     <CardTitle>{dish.name}</CardTitle>
    //   </CardImgOverlay>
    // </Card>
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish}></RenderMenuItem>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

// render() {
//   const menu = this.props.dishes.map((dish) => {
//     // return (
//     //   <div key={dish.id} className="col-12 mt-5">
//     //     <Media tag="li">
//     //       <Media left middle>
//     //         <Media object src={dish.image} alt={dish.name} />
//     //       </Media>
//     //       <Media body className="ml-5">
//     //         <Media heading>{dish.name}</Media>
//     //         <p>{dish.description}</p>
//     //       </Media>
//     //     </Media>
//     //   </div>
//     // );
//     return (
//       <div className="col-12 col-md-5 m-1">
//         <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
//           <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
//           <CardImgOverlay>
//             <CardTitle>{dish.name}</CardTitle>
//           </CardImgOverlay>
//         </Card>
//       </div>
//     );
//   });

//   return (
//     <div className="container">
//       <div className="row">{menu}</div>
//       {/* <DishDetail dish={this.state.selectedDish}></DishDetail> */}
//     </div>
//   );
// }
// }
export default Menu;
