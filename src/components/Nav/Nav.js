import React from "react";
import Search from "../SearchBar/Search";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="search-area col-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}
