import React from "react";

const SubCategory = ({ subCategory, toggle, index, style }) => {
  return (
    <div className={style.subCategory}>
      <ul>
        <li>{subCategory.value}</li>
      </ul>
    </div>
  );
};

export default SubCategory;
