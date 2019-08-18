import React from "react";

//style
import style from "./header.module.css";

const Search = ({ handleChange, search }) => {
  return (
    <div className={style.inputControl}>
      <span className={style.formIcon}>
        <i className="fas fa-search" />
      </span>
      <input
        name="search"
        type="text"
        placeholder="Search products by SKU or name"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default Search;
