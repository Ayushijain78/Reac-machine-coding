import React from "react";
import { PAGINATION_ENUMS } from "../utils";

const Pagination = (props) => {
  const { totalPages, handlePageChange, currentPageNo } = props;

  const renderEntries = (totalPages, currentPageNo) => {
    let pageEntries = [];
    for (let page = 1; page <= totalPages; page++) {
      pageEntries.push(
        <li key={page}>
          <button
            disabled={page === currentPageNo}
            onClick={()=>handlePageChange(PAGINATION_ENUMS.CHANGE, page)}
          >
            {page}
          </button>
        </li>
      );
    }
    return pageEntries;
  };
  return(<div className="flex">
    <button className="btn-first" onClick={()=>{handlePageChange(PAGINATION_ENUMS.FIRST)}}>Goto first</button>
    <button className="btn-change" onClick={()=>handlePageChange(PAGINATION_ENUMS.CHANGE, currentPageNo-1)}>◀︎</button>
    <ul className="page-list">{renderEntries(totalPages,currentPageNo)}</ul>
    <button className="btn-change"onClick={()=>handlePageChange(PAGINATION_ENUMS.CHANGE, currentPageNo+1)}>▶︎</button>
    <button className="btn-last" onClick={()=>handlePageChange(PAGINATION_ENUMS.LAST)}>Goto Last</button>
  </div>)
};

export default Pagination;
