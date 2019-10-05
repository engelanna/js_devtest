import React from "react";

import VideoInformationRecordsDropdown from "./components/video_information_records_dropdown";

import styles from "./dropdowns_bar.module.scss";

const DropdownsBar = () => (
  <div className={styles.disable_text_selection}>
    <VideoInformationRecordsDropdown />
  </div>
);

export default DropdownsBar;
