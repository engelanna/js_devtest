import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import routes from "../../shared/config/routes.js";

const VideoInformationRecordsSection = withRouter(({ match }) => (
  <Route path={`${match.url}`}>
    <Sections match={match} />
  </Route>
));

const Sections = ({ match }) => {
  console.info(match);

  return <div>Boom! Aaa</div>;
};

export default VideoInformationRecordsSection;
