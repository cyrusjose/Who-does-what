import React, { useContext } from "react";
import "./Search.css";
import DataContext from "../../utils/DataContext";

export default function Seach() {
  const context = useContext(DataContext);
  return (
    <div className="searchbox">
      <form className="searchForm">
        <input
          className="form-control"
          type="search"
          placeholder="Search Name"
          aria-label="Search"
          onChange={e => context.handleSearch(e)}
        />
      </form>
    </div>
  );
}
