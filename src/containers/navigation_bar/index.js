import React from "react";

import Header from "./components/header";
import DropdownsBar from "./components/dropdowns_bar";

import styles from "./navigation_bar.module.scss";

const NavigationBar = () => (
  <nav className={`navbar navbar-header navbar-default ${styles.gradient}`}>
    <Header />
    <DropdownsBar />
  </nav>
);

export default NavigationBar;
