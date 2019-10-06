import React from "react";

import Header from "./components/header";
import DropdownsBar from "./components/dropdowns_bar";

const NavigationBar = () => (
  <nav className="row navbar navbar-header navbar-default" style={{ border: "none" }}>
    <div className="col-md-12">
      <Header />
      <DropdownsBar />
    </div>
  </nav>
);

export default NavigationBar;
