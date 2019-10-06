import React from "react";
import Pagination from "react-js-pagination";

const PaginationSection = ({ perPage, activePage, onChange, totalItemsCount }) => (
  <div className="text-center">
    <Pagination
      activePage={activePage}
      itemsCountPerPage={perPage}
      totalItemsCount={totalItemsCount}
      onChange={onChange}
    />
  </div>
);

const paginateRecords = (records, activePage, perPage) => {
  const indexOfLastRecord = activePage * perPage;
  const indexOfFirstRecord = indexOfLastRecord - perPage;

  return records.slice(indexOfFirstRecord, indexOfLastRecord);
};

export { paginateRecords };
export default PaginationSection;
