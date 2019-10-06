import React from "react";

import styles from "./form.module.scss";

const Form = ({ record, onSave }) => (
  <>
    <div className="col-md-8 col-md-offset-1">
      <Row label={"Title:"} value={record.title} />
      <Row label={"URL:"} value={record.video_snapshot_url} />
      <Row label={"Thumbnail URL:"} value={record.video_snapshot_thumbnail_url} />
      <Row label={"Description:"} value={record.description} />
      <Row label={"Description:"} value={record.description} />
    </div>
    <div className="col-md-8 col-md-offset-2 text-center">
      <button onClick={onSave} className={`btn btn-primary text-center ${styles.button}`}>
        Update!
      </button>
    </div>
  </>
);

const Row = ({ label, value }) => (
  <div className={`row ${styles.row}`}>
    <div className="col-md-2 text-right">{label}</div>
    <div className="col-md-10">
      <input className="form-control" value={value} />
    </div>
  </div>
);

export default Form;
