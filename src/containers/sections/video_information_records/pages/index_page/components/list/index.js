import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination, { paginateRecords } from "../../../../../../../shared/components/pagination";

import Row, { styles } from "./row";

const ITEMS_PER_PAGE = 1;

const List = ({ videoInformationRecords }) => {
  const [activePage, setActivePage] = useState(1);
  const paginatedRecords = paginateRecords(videoInformationRecords, activePage, ITEMS_PER_PAGE);

  return (
    <div className="col-md-12">
      <Header />

      {paginatedRecords.map(record => (
        <Row record={record} key={videoInformationRecords.indexOf(record)} />
      ))}

      <div className="text-center">
        <Pagination
          perPage={ITEMS_PER_PAGE}
          activePage={activePage}
          onChange={setActivePage}
          totalItemsCount={videoInformationRecords.length}
        />
      </div>
    </div>
  );
};

const Header = () => (
  <strong>
    <div className={`row ${styles.row}`}>
      <div className="col-md-2">Title</div>
      <div className="col-md-3">Link</div>
      <div className="col-md-2 text-center">Thumbnail</div>
      <div className="col-md-2">Description</div>
      <div className="col-md-3">Actions</div>
    </div>
  </strong>
);

List.propTypes = {
  videoInformationRecords: PropTypes.array.isRequired
};

export default List;
