import React, { Component } from "react";

class Product extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    console.log("Product ===> COmponentDidMount");
    console.log(prevProps);
  }
  componentWillUnmount() {
    console.log("Product===> UNMOUNT");
  }
  render() {
    console.log("Product ===> Render");
    const getClasses = () => {
      return this.props.product.count === 0 ? "bg-red-500" : "bg-slate-500";
    };

    return (
      <React.Fragment>
        <div className="flex gap-4">
          <span className="text-green-600">{this.props.product.name}</span>

          <button
            className="bg-blue-600 w-4 text-white"
            onClick={() => {
              this.props.onHandleDecreaseQuantity(this.props.product.id);
            }}
          >
            -
          </button>
          <span className={`${getClasses()}  text-white`}>
            {this.props.product.count}
          </span>
          <button
            className="bg-blue-600 w-4 text-white"
            onClick={() => {
              this.props.onHandleIncreaseQuantity(this.props.product.id);
            }}
          >
            +
          </button>
          <button
            className="text-red-500"
            onClick={() => {
              this.props.onHandleDelete(this.props.product.id);
            }}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
