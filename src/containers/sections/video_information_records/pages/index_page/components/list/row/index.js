import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./row.module.scss";

import routes from "../../../../../../../../shared/config/routes.js";

const Row = ({ id, record }) => (
  <div className={`row ${styles.row}`} key={id}>
    <RowAttributes record={record} />
    <ActionLinks record={record} />
  </div>
);

const RowAttributes = ({ record }) => (
  <>
    <div className="col-md-2">{record.title}</div>
    <div className="col-md-3">
      <a href={record.video_snapshot_url}>{record.video_snapshot_url}</a>
    </div>
    <div className="col-md-2 text-center">
      <a href={record.video_snapshot_url} target="_blank" rel="noopener noreferrer">
        <img className={styles.image} alt="thumbnail" src={record.video_snapshot_thumbnail_url} />
      </a>
    </div>
    <div className="col-md-2">{record.description}</div>
  </>
);

const ActionLinks = ({ record }) => {
  const editLink = routes.video_information_records.edit.replace(":id", record.id);
  const deleteLink = routes.video_information_records.delete.replace(":id", record.id);

  return (
    <>
      <Link to={editLink}>Edit</Link>
      <Link to={deleteLink}>Delete</Link>
    </>
  );
};

Row.propTypes = {
  record: PropTypes.object.isRequired
};

export { styles };

export default Row;
