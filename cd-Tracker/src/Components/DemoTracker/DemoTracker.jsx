import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DemoTracker.css";
import DataTable from "../Table/Table";
import BasicPagination from "../Pagination/Pagination";
import PositionedMenu from "../PositionedMenu/PositionedMenu";
import SearchBar from "../SearchBar/SearchBar";
import CustomizedMenus from "../Filter/CustomizedMenus";

function DemoTracker() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterRow, setFilterRow] = useState({});
  const [filterBool, setFilterBool] = useState(false);
  const [searchCont, setSearchCont] = useState("")

  const getFilterContent = (newRows) => {
    setFilterBool(true);
    setFilterRow(newRows);
  };

  const currPage = (val) => {
    setCurrentPage(val);
  };

  const searchContent = (res)=>{
    setFilterBool(true)
    setFilterRow(res)
  }

  const resetFilter = ()=>{
    setFilterBool(false)
  }

  return (
    <>
      <div className="container">
        <div className="sub_container">
          <SearchBar getFilterContent={getFilterContent} searchContent={searchContent} resetFilter = {resetFilter} />
          {/* sending the offset value to DataTable */}
          <DataTable
            offset={currentPage}
            filterRow={filterRow}
            filterBool={filterBool}
          />
        </div>
        <BasicPagination currPage={currPage} />
      </div>
    </>
  );
}

export default DemoTracker;
