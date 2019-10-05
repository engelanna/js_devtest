import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import VideoInformationRecordsSection from "../video_information_records_section";
import NavigationBar from "../navigation_bar";
import routes from "../../shared/config/routes.js";

const Main = () => (
  <div className="container-fluid">
    <Router>
      <NavigationBar />

      <Switch>
        <Sections />
      </Switch>
    </Router>
  </div>
);

const Sections = () => (
  <div>
    <VideoInformationRecordsSection />
  </div>
);

export default Main;
