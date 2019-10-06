import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

import Row, { styles } from "./row";

const ITEMS_PER_PAGE = 1;

const List = ({ videoInformationRecords }) => {
  const [activePage, setActivePage] = useState(1);

  const indexOfLastTodo = activePage * ITEMS_PER_PAGE;
  const indexOfFirstTodo = indexOfLastTodo - ITEMS_PER_PAGE;
  const paginatedRecords = videoInformationRecords.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <div className="col-md-12">
      <Header />

      {paginatedRecords.map(record => (
        <Row record={record} />
      ))}
      <PaginationSection records={videoInformationRecords} activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

const PaginationSection = ({ records, activePage, setActivePage }) => (
  <div className="text-center">
    <Pagination
      activePage={activePage}
      itemsCountPerPage={ITEMS_PER_PAGE}
      totalItemsCount={Object.keys(records).length}
      onChange={setActivePage}
    />
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
