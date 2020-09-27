import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./Data.css";
import DataContext from "../../utils/DataContext";
import Nav from "../Nav";
import Table from "../Table";

export default function Data() {
  const [devState, setDevState] = useState({
    users: [],
    order: "ascend",
    userFilter: [],
    headings: [
      { name: "Image" },
      { name: "Name" },
      { name: "Phone" },
      { name: "Email" },
      { name: "DOB" }
    ]
  });

  const handleSorting = heading => {
    if (devState.order === "descend") {
      setDevState("ascend");
    } else {
      setDevState("descend");
    }

    const comparison = (a, b) => {
      if (devState.order === "ascend") {
        if (a[heading] === undefined) {
          // Place heading last
          return 1;
        } else if (b[heading] === undefined) {
          // place heading last
          return -1;
        } else if (heading === "name") {
          // If the heading has a name then make sort in alphabetic
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          // Compare the headings values in descending order.
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };

    const userSort = devState.userFilter.sort(comparison);

    setDevState({
      ...devState,
      userFilter: userSort
    });
  };

  const handleSearch = event => {
    // Take the item passed into the function
    const filterValue = event.target.value;
    const filteredList = devState.users.filter(item => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filterValue.toLowerCase()) !== -1;
    });

    setDevState({
      ...devState,
      userFilter: filteredList
    });
  };
  useEffect(() => {
    API.getUsers().then(results => {
      setDevState({
        ...devState,
        users: results.data.results,
        userFilter: results.data.results
      });
    });
  });

  return (
    <DataContext.Provider value={{ devState, handleSearch, handleSorting }}>
      <Nav />
      <div>
        {devState.userFilter.length > 0}

        <Table />
      </div>
    </DataContext.Provider>
  );
}
