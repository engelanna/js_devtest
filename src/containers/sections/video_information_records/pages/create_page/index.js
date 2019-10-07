import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import Form from "../../components/form";
import actionCreators from "../../../../../actions/video_information_records";
import routes from "../../../../../shared/config/routes.js";

class CreatePage extends Component {
  state = {
    shouldRedirectToIndex: false
  };

  createVideoInformationRecord = attributes => {
    this.props.createVideoInformationRecord(attributes);
    this.setState({ shouldRedirectToIndex: true });
  };

  render() {
    const { attributes } = this.props;
    const { shouldRedirectToIndex } = this.state;

    return shouldRedirectToIndex ? (
      <RedirectToIndex />
    ) : (
      <>
        <h4 className="text-center">Create video information record</h4>
        <Form attributes={attributes} onSubmit={this.createVideoInformationRecord} />
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

const mapDispatchToProps = dispatch => ({
  createVideoInformationRecord: bindActionCreators(actionCreators.createVideoInformationRecord, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(CreatePage);
