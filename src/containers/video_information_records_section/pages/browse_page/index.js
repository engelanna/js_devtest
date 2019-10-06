import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import VideoInformationRecordList from "./components/video_information_record_list";
import actionCreators from "../../../../actions/video_information_records";

const BrowsePage = ({ videoInformationRecords }) => (
  <div className="col-md-12">
    <h4>Video information records</h4>

    <div className="col-md-12">
      <VideoInformationRecordList videoInformationRecords={videoInformationRecords} />
    </div>
  </div>
);

BrowsePage.propTypes = {
  videoInformationRecords: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  videoInformationRecords: state.videoInformationRecords
});

export default connect(mapStateToProps)(BrowsePage);
