import React, { Component } from "react";
import Product from "./Product";
import spinner from "../../static/spinner.gif";

//style
import style from "./shop.module.css";

class Products extends Component {
  filter = products => {
    const { search, age, brand, skinType } = this.props;

    if (
      !search &&
      (age === "Select age" &&
        brand === "Select brand" &&
        skinType === "Select skin type")
    ) {
      return products;
    }

    return products.filter(product => {
      if (!search) {
        return (
          product.age === age ||
          product.brand === brand ||
          product.skinType === skinType
        );
      } else {
        return (
          product.productTitle.toLowerCase().indexOf(search.toLowerCase()) >= 0
        );
      }
    });
  };

  render() {
    const { products, isLoading, toggleModal } = this.props;

    return (
      <div className={style.products}>
        {isLoading && (
          <div className={style.spinnerContainer}>
            <img src={spinner} alt="spinner" />
          </div>
        )}
        {products &&
          this.filter(products).map(product => {
            return (
              <Product
                key={product._id}
                product={product}
                toggleModal={toggleModal}
              />
            );
          })}
      </div>
    );
  }
}

export default Products;
