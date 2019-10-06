import React from "react";

import VideoInformationRecordsDropdown from "./components/video_information_records_dropdown";

import styles from "./dropdowns_bar.module.scss";

const DropdownsBar = () => (
  <div className="row">
    <div className={`col-md-12 ${styles.disable_text_selection}`}>
      <VideoInformationRecordsDropdown />
    </div>
  </div>
);

export default DropdownsBar;
