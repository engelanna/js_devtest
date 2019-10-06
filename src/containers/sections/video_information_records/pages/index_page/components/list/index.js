import React from "react";
import PropTypes from "prop-types";

import Row, { styles } from "./row";

const List = ({ videoInformationRecords }) => (
  <div className="col-md-12">
    <Header />
    {Object.keys(videoInformationRecords).map(record_id => (
      <Row id={record_id} key={record_id} record={videoInformationRecords[record_id]} />
    ))}
  </div>
);

const Header = () => (
  <strong>
    <div className={`row ${styles.row}`}>
      <div className="col-md-3">Title</div>
      <div className="col-md-3">Link</div>
      <div className="col-md-3">Thumbnail</div>
      <div className="col-md-3">Description</div>
    </div>
  </strong>
);

List.propTypes = {
  videoInformationRecords: PropTypes.object.isRequired
};

export default List;
