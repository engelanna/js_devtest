import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Form from "../../components/form";
import actionCreators from "../../../../../actions/video_information_records";

const EditPage = ({ record, match }) => (
  <>
    <h4 className="text-center">Edit video information record</h4>
    <Form record={record} />
  </>
);

EditPage.propTypes = {
  record: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  record: state.videoInformationRecords.find(record => record.id == props.match.params.id),
  ...props
});

const mapDispatchToProps = dispatch => ({
  updateVideoInformationRecord: bindActionCreators(actionCreators.updateVideoInformationRecord, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
