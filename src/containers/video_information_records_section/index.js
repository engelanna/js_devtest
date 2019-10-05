import React from "react";
import { Route } from "react-router-dom";

import routes from "../../shared/config/routes.js";

const VideoInformationRecordsSection = ({ match }) => (
  <>
    <Route path={routes.video_information_records.create} />
    <Route path={routes.video_information_records.browse} />
  </>
);

export default VideoInformationRecordsSection;
