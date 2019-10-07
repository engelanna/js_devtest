import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import Form from "../../components/form";
import actionCreators from "../../../../../actions/video_information_records";
import routes from "../../../../../shared/config/routes.js";

class EditPage extends Component {
  state = {
    shouldRedirectToIndex: false
  };

  updateVideoInformationRecord = attributes => {
    this.props.updateVideoInformationRecord(this.props.id, attributes);
    this.setState({ shouldRedirectToIndex: true });
  };

  render() {
    const { attributes } = this.props;
    const { shouldRedirectToIndex } = this.state;

    return shouldRedirectToIndex ? (
      <RedirectToIndex />
    ) : (
      <>
        <h4 className="text-center">Edit video information record</h4>
        <Form attributes={attributes} onSubmit={this.updateVideoInformationRecord} />
      </>
    );
  }
}

const RedirectToIndex = () => (
  <Redirect
    to={{
      pathname: routes.video_information_records.index
    }}
  />
);

EditPage.propTypes = {
  id: PropTypes.number.isRequired,
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  id: parseInt(props.match.params.id),
  attributes: state.videoInformationRecords[props.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  updateVideoInformationRecord: bindActionCreators(actionCreators.updateVideoInformationRecord, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
