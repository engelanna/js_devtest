import React from "react";

import { Link } from "react-router-dom";
import paths from "../../../../../../shared/config/app_paths.js";

import styles from "./video_information_records_dropdown.module.scss";

const VideoInformationRecordsDropdown = () => (
  <ul className={`nav navbar-nav ${styles.pointer}`}>
    <li className="dropdown">
      <Header />
      <Links />
    </li>
  </ul>
);

const Header = () => (
  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    Video information records <span className="caret" />
  </a>
);

const Links = () => {
  console.info(paths);
  const { browse, create } = paths.video_information_records;

  return (
    <ul className="dropdown-menu">
      <li>
        <Link to={browse} className="btn">
          Browse
        </Link>
      </li>
      <li role="separator" className="divider" />
      <li>
        <Link to={create} className="btn">
          Create
        </Link>
      </li>
    </ul>
  );
};

export default VideoInformationRecordsDropdown;
