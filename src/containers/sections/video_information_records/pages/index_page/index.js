import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import List from "./components/list";

const IndexPage = ({ videoInformationRecords }) => (
  <div className="row">
    <div className="col-md-12 text-bold">
      <h4 className="text-center">Video information records</h4>

      <List videoInformationRecords={videoInformationRecords} />
    </div>
  </div>
);

IndexPage.propTypes = {
  videoInformationRecords: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  videoInformationRecords: state.videoInformationRecords
});

export default connect(mapStateToProps)(IndexPage);
