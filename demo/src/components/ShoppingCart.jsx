import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("ShoppingCart ===> Constructor");
  }

  componentDidMount() {
    //Calling Backend Server
    console.log("ShoppingCart ===> ComponentDidMount");
  }
  state = {};
  render() {
    console.log("ShoppingCart ===> Render ");
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onHandleDelete={this.props.onHandleDelete}
            onHandleIncreaseQuantity={this.props.onHandleIncreaseQuantity}
            onHandleDecreaseQuantity={this.props.onHandleDecreaseQuantity}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
