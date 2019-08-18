import React from "react";

//style
import style from "./shop.module.css";

const ShopFilter = ({ handleChange }) => {
  return (
    <div className={style.shopFilter}>
      <ul className={style.shopItems}>
        <div>
          <li className={style.shopItem}>
            <span>BRAND:</span>
            <select name="brand" onChange={handleChange}>
              <option defaultValue="Select brand">Select brand</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="puma">Puma</option>
            </select>
          </li>
          <li className={style.shopItem}>
            <span>SKIN TYPE:</span>
            <select name="skinType" onChange={handleChange}>
              <option defaultValue="Select skin type">Select skin type</option>
              <option value="oily">Oily</option>
              <option value="dry">Dry</option>
              <option value="mixed">Mixed</option>
            </select>
          </li>
          <li className={style.shopItem}>
            <span>AGE:</span>
            <select name="age" onChange={handleChange}>
              <option defaultValue="Select age">Select age</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
            </select>
          </li>
        </div>
        <div>
          <li className={style.shopItem}>
            <span>SORT:</span>
            <a href="./nowhere">
              BY <span>POPULARITY</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ShopFilter;
