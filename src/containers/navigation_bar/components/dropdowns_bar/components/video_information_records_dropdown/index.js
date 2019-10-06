import React from "react";

import { Link } from "react-router-dom";
import paths from "../../../../../../shared/config/routes.js";

import styles from "./video_information_records_dropdown.module.scss";

const VideoInformationRecordsDropdown = () => (
  <div className="row">
    <div className="col-md-12">
      <ul className={`nav navbar-right ${styles.menu_container}`}>
        <li className="dropdown">
          <Header />
          <Links />
        </li>
      </ul>
    </div>
  </div>
);

const Header = () => (
  <button className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Video information records <span className="caret" />
  </button>
);

const Links = () => {
  const { browse, create } = paths.video_information_records;

  return (
    <ul className={`dropdown-menu ${styles.menu}`}>
      <li>
        <Link to={browse} className={`btn ${styles.button}`}>
          Browse
        </Link>
      </li>
      <li role="separator" className={`divider ${styles.divider}`} />
      <li>
        <Link to={create} className={`btn ${styles.button}`}>
          Create
        </Link>
      </li>
    </ul>
  );
};

export default VideoInformationRecordsDropdown;
