import React from "react";

import Header from "./components/header";
import DropdownBar from "./components/dropdowns_bar";

const NavigationBar = () => (
  <nav className="navbar navbar-default">
    <Header />
    <DropdownBar />
  </nav>
);

export default NavigationBar;
