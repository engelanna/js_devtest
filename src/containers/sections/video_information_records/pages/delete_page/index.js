import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import actionCreators from "../../../../../actions/video_information_records";
import routes from "../../../../../shared/config/routes.js";

class DeletePage extends Component {
  state = {
    confirmed: false
  };

  componentDidMount() {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      this.deleteVideoInformationRecord(this.props.id);
    }
  }

  deleteVideoInformationRecord = id => {
    this.setState({ confirmed: true });
    this.props.deleteVideoInformationRecord(id);
  };

  render() {
    const { confirmed } = this.state;

    return (
      confirmed && (
        <Redirect
          to={{
            pathname: routes.video_information_records.index
          }}
        />
      )
    );
  }
}

DeletePage.propTypes = {
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state, props) => ({
  id: parseInt(props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  deleteVideoInformationRecord: bindActionCreators(actionCreators.deleteVideoInformationRecord, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePage);
