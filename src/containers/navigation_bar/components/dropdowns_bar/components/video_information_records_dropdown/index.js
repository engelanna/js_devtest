import React from "react";

import styles from "./video_information_records_dropdown.module.scss";

const VideoInformationRecordsDropdown = () => (
  <ul className={`nav navbar-nav ${styles.pointer}`}>
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

export default VideoInformationRecordsDropdown;
