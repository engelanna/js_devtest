import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import List from "./components/list";
import actionCreators from "../../../../../actions/video_information_records";
import routes from "../../../../../shared/config/routes.js";

const IndexPage = ({ videoInformationRecords }) => (
  <div className="col-md-12 text-bold">
    <h4 className="text-center">
      <strong>Video information records</strong>
    </h4>

    <List videoInformationRecords={videoInformationRecords} />
  </div>
);

IndexPage.propTypes = {
  videoInformationRecords: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  videoInformationRecords: state.videoInformationRecords
});

export default connect(mapStateToProps)(IndexPage);
