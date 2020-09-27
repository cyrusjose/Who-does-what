import React, { useContext } from "react";
import "./Search.css";
import DataContext from "../../utils/DataContext";

export default function Seach() {
  const context = useContext(DataContext);
  return (
    <div>
      <form>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => context.handleSearch(e)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
