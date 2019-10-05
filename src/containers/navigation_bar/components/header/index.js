import React from "react";

import logo from "../../../../assets/images/logo.svg";
import styles from "./header.module.scss";

const Header = () => (
  <div className={`${styles.container} container-fluid navbar-brand navbar-header`}>
    <img src={logo} className={styles.logo} alt="logo" />
    <div className={styles.username}>Anna is hardcoded</div>
  </div>
);

export default Header;
