import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination, { paginateRecords } from "../../../../../../../shared/components/pagination";

import Row, { styles } from "./row";

const ITEMS_PER_PAGE = 1;

const List = ({ videoInformationRecords }) => {
  const asList = Object.values(videoInformationRecords);
  const [activePage, setActivePage] = useState(1);
  const paginatedList = paginateRecords(asList, activePage, ITEMS_PER_PAGE);

  return (
    <div className="col-md-12">
      <Header />
      <PaginatedRows allRecords={videoInformationRecords} paginatedList={paginatedList} />

      <div className="text-center">
        <Pagination
          perPage={ITEMS_PER_PAGE}
          activePage={activePage}
          onChange={setActivePage}
          totalItemsCount={asList.length}
        />
      </div>
    </div>
  );
};

const PaginatedRows = ({ paginatedList, allRecords }) =>
  paginatedList.map(record => {
    const id = getKeyByValue(allRecords, record);

    return <Row record={record} id={id} key={id} />;
  });

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

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
  videoInformationRecords: PropTypes.object.isRequired
};

export default List;
