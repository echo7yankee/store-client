import React from "react";

//style
import style from "./shop.module.css";

const ShopType = () => {
  return (
    <div className={style.shopPagination}>
      <div>
        <h1>Creams & gels</h1>
      </div>
      <div>
        <span>Showing 60 of 392</span>
        <button>
          <i className="fas fa-chevron-left" />
        </button>
        <button>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default ShopType;
