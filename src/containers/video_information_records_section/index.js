import React from "react";
import { Route } from "react-router-dom";

import CreatePage from "./pages/create_page";
import BrowsePage from "./pages/browse_page";
import UpdatePage from "./pages/update_page";
import DeletePage from "./pages/delete_page";
import routes from "../../shared/config/routes.js";

const VideoInformationRecordsSection = () => (
  <>
    <Route component={BrowsePage} path={routes.video_information_records.browse} exact>
      <Route component={UpdatePage} path={routes.video_information_records.update} />

      <Route component={DeletePage} path={routes.video_information_records.delete} />
    </Route>

    <Route component={CreatePage} path={routes.video_information_records.create} />
  </>
);

export default VideoInformationRecordsSection;
