import React from "react";
import { Route } from "react-router-dom";

import CreatePage from "./pages/create_page";
import IndexPage from "./pages/index_page";
import EditPage from "./pages/edit_page";
import DeletePage from "./pages/delete_page";
import routes from "../../../shared/config/routes.js";

const VideoInformationRecordsSection = () => (
  <>
    <Route component={IndexPage} path={routes.video_information_records.index} exact />

    <Route component={CreatePage} path={routes.video_information_records.create} />

    <Route component={EditPage} path={routes.video_information_records.edit} />

    <Route component={DeletePage} path={routes.video_information_records.delete} />
  </>
);

export default VideoInformationRecordsSection;
