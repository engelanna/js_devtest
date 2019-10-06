import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import VideoInformationRecordsSection from "../sections/video_information_records";
import NavigationBar from "../navigation_bar";

import styles from "./main.module.scss";

const Main = () => (
  <div className={`container-fluid ${styles.gradient_background}`}>
    <div className="col-md-12">
      <Router>
        <NavigationBar />

        <Switch>
          <Sections />
        </Switch>
      </Router>
    </div>
  </div>
);

const Sections = () => (
  <>
    <VideoInformationRecordsSection />
  </>
);

export default Main;
