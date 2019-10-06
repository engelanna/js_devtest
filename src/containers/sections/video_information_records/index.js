import React from "react";
import { Route } from "react-router-dom";

import CreatePage from "./pages/create_page";
import IndexPage from "./pages/index_page";
import UpdatePage from "./pages/update_page";
import DeletePage from "./pages/delete_page";
import routes from "../../../shared/config/routes.js";

const VideoInformationRecordsSection = () => (
  <>
    <Route component={IndexPage} path={routes.video_information_records.index} exact />

    <Route component={CreatePage} path={routes.video_information_records.create} />

    <Route component={UpdatePage} path={routes.video_information_records.update} />

    <Route component={DeletePage} path={routes.video_information_records.delete} />
  </>
);

export default VideoInformationRecordsSection;
