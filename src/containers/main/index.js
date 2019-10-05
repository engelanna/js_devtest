import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

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
  <Route path={routes.video_information_records.base}>
    <VideoInformationRecordsSection />
  </Route>
);

export default Main;
