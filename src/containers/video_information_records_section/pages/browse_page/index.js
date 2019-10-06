import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import actionCreators from "../../../../actions/video_information_records";

const BrowsePage = ({ match }) => {
  console.info(match);

  return <div>Browse page yee-haw!</div>;
};

BrowsePage.propTypes = {
  video_information_records: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  video_information_records: state.video_information_records
});

export default connect(mapStateToProps)(BrowsePage);
