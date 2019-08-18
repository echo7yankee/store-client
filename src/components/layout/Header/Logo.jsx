import React from "react";

import style from "./header.module.css";

const HeaderLogo = () => {
  return (
    <a href="./nowhere" className={style.headerLogo}>
      Amazing store
    </a>
  );
};

export default HeaderLogo;
