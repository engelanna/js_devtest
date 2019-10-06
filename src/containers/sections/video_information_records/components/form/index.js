import React, { useState } from "react";

import styles from "./form.module.scss";

const Form = ({ attributes, onSubmit }) => {
  const [formState, setFormState] = useState({ ...attributes });

  return (
    <>
      <Rows state={formState} setState={setFormState} />
      <SubmitButton onClick={() => onSubmit(formState)} />
    </>
  );
};

const SubmitButton = ({ onClick }) => (
  <div className="col-md-8 col-md-offset-2 text-center">
    <button onClick={onClick} className={`btn btn-primary text-center ${styles.button}`}>
      Update!
    </button>
  </div>
);

const Rows = ({ state, setState }) => (
  <div className="form-group col-md-8 col-md-offset-1">
    {Object.keys(ROW_TITLES).map(key => (
      <Row key={key} attributeName={key} state={state} setState={setState} />
    ))}
  </div>
);

const ROW_TITLES = {
  title: "Title:",
  video_snapshot_url: "URL:",
  video_snapshot_thumbnail_url: "Thumbnail URL:",
  description: "Description:"
};

const Row = ({ attributeName, state, setState }) => (
  <div className={`row ${styles.row}`}>
    <div className="col-md-2 text-right">{ROW_TITLES[attributeName]}</div>
    <div className="col-md-10">
      <input
        className="form-control"
        value={state[attributeName]}
        onChange={event => setState({ ...state, [attributeName]: event.target.value })}
      />
    </div>
  </div>
);

export default Form;
