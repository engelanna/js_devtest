import React from "react";

import logo from "../../../../assets/images/logo.svg";
import styles from "./header.module.scss";

const Header = () => (
  <div className={styles.container}>
    <img src={logo} className={styles.logo} alt="logo" />
    <div className={styles.username}>Anna</div>
  </div>
);

export default Header;
