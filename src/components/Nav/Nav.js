import React from "react";
import Search from "../SearchBar/Search";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="search-area col-4">
        <Search />
      </div>
    </nav>
  );
}
