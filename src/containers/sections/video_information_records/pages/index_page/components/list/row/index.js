import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./row.module.scss";

import routes from "../../../../../../../../shared/config/routes.js";

const Row = ({ id, record }) => (
  <div className={`row ${styles.row}`} key={id}>
    <AttributeColumns record={record} />
    <ActionLinksColumn id={id} />
  </div>
);

const AttributeColumns = ({ record }) => (
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

const ActionLinksColumn = ({ id }) => {
  const editLink = routes.video_information_records.edit.replace(":id", id);
  const deleteLink = routes.video_information_records.delete.replace(":id", id);

  return (
    <div className="col-md-3">
      <Link to={editLink} className={styles.link}>
        Edit
      </Link>
      <Link to={deleteLink} className={styles.link}>
        Delete
      </Link>
    </div>
  );
};

Row.propTypes = {
  record: PropTypes.object.isRequired
};

export { styles };

export default Row;
