import React from "react";

import styles from "./dropdowns_bar.module.scss";

const DropdownsBar = () => (
  <div className="container-fluid">
    <VideosDropdown />
  </div>
);

const VideosDropdown = () => (
  <ul className={`${styles.pointer} nav navbar-nav`}>
    <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        Video information records <span className="caret" />
      </a>
      <ul className="dropdown-menu">
        <li>
          <a>Browse</a>
        </li>
        <li role="separator" className="divider" />
        <li>
          <a>New</a>
        </li>
      </ul>
    </li>
  </ul>
);

export default DropdownsBar;
