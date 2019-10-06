import React from "react";

import logo from "../../../../assets/images/logo.svg";
import styles from "./header.module.scss";

const Header = () => (
  <div className="row">
    <div className={`col-md-12 ${styles.container}`}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.username}>Anna</div>
    </div>
  </div>
);

export default Header;
