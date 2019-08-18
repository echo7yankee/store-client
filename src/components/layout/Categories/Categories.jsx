import React from "react";
import SubCategory from "./SubCategory";

const Categories = ({ style, category, toggle, onToggle, index }) => {
  return category ? (
    <div className={style.categoriesContainer}>
      <button onClick={() => onToggle(index)}>{category.name}</button>
      <div
        className={
          toggle === index ? style.subCategoriesShow : style.subCategories
        }
      >
        {category &&
          category.children.map(subCategory => {
            return (
              <SubCategory
                key={subCategory.id}
                subCategory={subCategory}
                style={style}
                toggle={toggle}
                index={index}
              />
            );
          })}
      </div>
    </div>
  ) : null;
};

export default Categories;
