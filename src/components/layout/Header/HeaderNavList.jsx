import React from "react";

//Style
import style from "./header.module.css";

const HeaderNavList = () => {
  return (
    <ul>
      <li>
        <span className="mr-1">
          <i className="fas fa-map-marker-alt" />
        </span>
        <span>My city:</span>
        <a href="./nowhere">Los Angeles</a>
      </li>
      <li>
        <span className="mr-1">
          <i className="fas fa-phone-alt" />
        </span>
        <span>8 800 505-04-83</span>
      </li>
      <nav className={style.headerNav}>
        <li>
          <a href="./nowhere">Shipping</a>
        </li>
        <li>
          <a href="./nowhere">Blog</a>
        </li>
        <div className={style.test}>
          <li>
            <a href="./nowhere">Company</a>
          </li>
          <li>
            <a href="./nowhere">My account</a>
          </li>
        </div>
      </nav>
    </ul>
  );
};

export default HeaderNavList;
