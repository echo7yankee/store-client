import React from "react";

//style
import style from "./shop.module.css";

const Product = ({ product, toggleModal }) => {
  return (
    <>
      <div className={style.product}>
        <div>
          <img src={product.img} alt={product.imgAlt} />
        </div>
        <div>
          <p>{product.productTitle}</p>
        </div>
        <div>
          <span className={style.productPrice}>${product.price}</span>
        </div>
        <div className={style.productButton}>
          <button onClick={() => toggleModal(product._id)}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
