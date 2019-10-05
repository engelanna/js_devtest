import React from "react";

import styles from "./navigation_bar.module.scss";
import logo from "../../assets/images/logo.svg";

const Navbar = () => (
  <nav className="navbar navbar-default">
    <Header />
  </nav>
);

const Header = () => (
  <div className={`${styles.navbar_container} container-fluid navbar-brand navbar-header`}>
    <img src={logo} className={styles.logo} alt="logo" />
    <div className={styles.username}>Anna is hardcoded</div>
  </div>
);

export default Navbar;
