import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VideoInformationRecordsSection from "../video_information_records_section";
import NavigationBar from "../navigation_bar";

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
  <Route path="/video_information_records">
    <VideoInformationRecordsSection />
  </Route>
);

export default Main;
