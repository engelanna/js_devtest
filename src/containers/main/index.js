import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VideoInformationRecordsSection from "../video_information_records_section";
import NavigationBar from "../navigation_bar";

const Main = () => (
  <Router>
    <NavigationBar />

    <Switch>
      <Sections />
    </Switch>
  </Router>
);

const Sections = () => (
  <Route path="/video_information_records">
    <VideoInformationRecordsSection />
  </Route>
);

export default Main;
