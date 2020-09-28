import React, { useContext } from "react";
import "./Search.css";
import DataContext from "../../utils/DataContext";

export default function Seach() {
  const context = useContext(DataContext);
  return (
    <div className="searchbox">
      <form className="searchForm">
        <input
          className="form-control px-5"
          type="search"
          placeholder="Search First Name"
          aria-label="Search"
          onChange={e => context.handleSearch(e)}
        />
        <button className="search px-3" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
