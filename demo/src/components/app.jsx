import React, { Component } from "react";
import Nav from "./Nav";
import ShoppingCart from "./ShoppingCart";
import HooksLearning from "./hooksLearning";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product 1",
        count: 1,
      },
      {
        id: 2,
        name: "Product 2",
        count: 1,
      },
      {
        id: 3,
        name: "Product 3",
        count: 1,
      },
    ],
  };

  render() {
    const handleDelete = (productId) => {
      const products = this.state.products.filter((p) => p.id !== productId);
      this.setState({ products });
    };

    const handleIncreaseQuantity = (productId) => {
      const products = this.state.products.map((p) =>
        p.id === productId ? { ...p, count: p.count + 1 } : p,
      );
      this.setState({ products });
    };

    const handleDecreaseQuantity = (productId) => {
      const products = this.state.products.map((p) =>
        productId === p.id ? { ...p, count: p.count - 1 } : p,
      );

      this.setState({ products });
    };

    return (
      <React.Fragment>
        <Nav />
        <main className="container">
          <ShoppingCart
            products={this.state.products}
            onHandleDelete={handleDelete}
            onHandleIncreaseQuantity={handleIncreaseQuantity}
            onHandleDecreaseQuantity={handleDecreaseQuantity}
          />
          <HooksLearning />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
