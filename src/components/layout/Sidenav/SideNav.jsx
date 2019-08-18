import React from "react";
import Categories from "../Categories/Categories";
import Advertisement from "../Categories/Advertisement";

//style
import style from "./sidenav.module.css";

const SideNav = ({ categories, toggle, onToggle }) => {
  return (
    <nav>
      <div className={`${style.categories}`}>
        <div>
          <h1>ALL CATEGORIES</h1>
        </div>
        {categories &&
          categories.map((category, index) => {
            return category ? (
              <Categories
                key={category.id}
                index={index}
                category={category}
                style={style}
                toggle={toggle}
                onToggle={onToggle}
              />
            ) : null;
          })}
      </div>
      <Advertisement style={style} />
    </nav>
  );
};

export default SideNav;
