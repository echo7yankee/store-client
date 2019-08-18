import React from "react";

//style
import style from "./header.module.css";

const HeaderCart = () => {
  return (
    <div>
      <button>
        <span className="mr-1">
          <i className="fas fa-shopping-cart" />
        </span>
        <span>MY CART</span>
        <span className={style.buttonCount}>0</span>
      </button>
    </div>
  );
};

export default HeaderCart;
