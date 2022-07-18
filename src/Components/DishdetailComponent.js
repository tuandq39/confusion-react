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
// export default class DishDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedDish: null,
//       comments: null,
//     };
//   }

//   renderDIsh(dish) {
//     if (dish != null) {
//       console.log(dish.comments);
//       return (
//         <Card>
//           <CardImg top src={dish.image} alt={dish.name}></CardImg>
//           <CardBody>
//             <CardTitle>{dish.name}</CardTitle>
//             <CardText>{dish.description}</CardText>
//           </CardBody>
//         </Card>
//       );
//     } else {
//       return <div></div>;
//     }
//   }

//   renderComments(comments) {
//     if (comments != null) {
//       return (
//         <div className="col-12 col-md-5 m-1">
//           <h4>Comments</h4>
//           <ul className="list-unstyled">
//             {comments.map((comment) => {
//               return (
//                 <li key={comment.id}>
//                   <p>{comment.comment}</p>
//                   <p>
//                     -- {comment.author} ,{" "}
//                     {new Intl.DateTimeFormat("en-US", {
//                       year: "numeric",
//                       month: "short",
//                       day: "2-digit",
//                     }).format(new Date(Date.parse(comment.date)))}
//                   </p>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }

//   render() {
//     if (this.props.dish != null) {
//       return (
//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             {this.renderDIsh(this.props.dish)}
//           </div>

//           {this.renderComments(this.props.dish.comments)}
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
// }

function renderDIsh(dish) {
  if (dish != null) {
    console.log(dish.comments);
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function renderComments(comments) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  // if (props.dish != null) {
  //   return (
  //     <div className="row">
  //       <div className="col-12 col-md-5 m-1">{renderDIsh(props.dish)}</div>

  //       {renderComments(props.dish.comments)}
  //     </div>
  //   );
  // } else {
  //   return <div></div>;
  // }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <renderDIsh dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <renderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
