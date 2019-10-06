import React from "react";
import PropTypes from "prop-types";

import styles from "./row.module.scss";

const Row = ({ id, record }) => (
  <div className={`row ${styles.row}`} key={id}>
    <RowAttributes record={record} />
  </div>
);

const RowAttributes = ({ record }) => (
  <>
    <div className="col-md-3">{record.title}</div>
    <div className="col-md-3">
      <a href={record.video_snapshot_url}>{record.video_snapshot_url}</a>
    </div>
    <div className="col-md-3">
      <a href={record.video_snapshot_url} target="_blank">
        <img className={styles.image} src={record.video_snapshot_thumbnail_url} />
      </a>
    </div>
    <div className="col-md-3">{record.description}</div>
  </>
);

Row.propTypes = {
  id: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired
};

export { styles };
export default Row;
