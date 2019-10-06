import React from "react";
import PropTypes from "prop-types";

import styles from "./video_information_record_list.module.scss";

const List = ({ videoInformationRecords }) => (
  <>
    {Object.keys(videoInformationRecords).map(record_id => (
      <Row key={record_id} record={videoInformationRecords[record_id]} />
    ))}
  </>
);

const Row = ({ id, record }) => (
  <div className="row" key={id}>
    <div className="col-md-8 col-md-offset-2">
      <RowTitle title={record.title} />
      <RowAttributes record={record} />
    </div>
  </div>
);

const RowTitle = ({ title }) => (
  <p className={`text-center ${styles.row_title}`}>
    <strong>{title}</strong>
  </p>
);

const RowAttributes = ({ record }) => (
  <div className="list-group-item">
    <p>video_snapshot_thumbnail_url: {record.video_snapshot_thumbnail_url}</p>
    <p>video_snapshot_url: {record.video_snapshot_url}</p>
    <p>description: {record.description}</p>
  </div>
);

List.propTypes = {
  videoInformationRecords: PropTypes.object.isRequired
};

export default List;
