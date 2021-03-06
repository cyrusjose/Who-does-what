import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./Data.css";
import DataContext from "../../utils/DataContext";
import Nav from "../Nav/Nav";
import Table from "../Table/Table";

const DataArea = () => {
  const [devState, setDevState] = useState({
    users: [],
    order: "ascend",
    userFilter: [],
    headings: [
      { name: "Profile Picture", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" }
    ]
  });

  const handleSorting = heading => {
    if (devState.order === "ascend") {
      // setOrderState('descend")
      devState.order = "descend";
    } else {
      devState.order = "ascend";
    }

    const comparison = (a, b) => {
      if (devState.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // Sort by name and dob
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // sort by name and dob
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        } else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };

    const userSort = devState.userFilter.sort(comparison);
    const headingsUpdate = devState.headings.map(elem => {
      elem.order = elem.name === heading ? devState.order : elem.order;
      return elem;
    });

    setDevState({
      ...devState,
      userFilter: userSort,
      headings: headingsUpdate
    });
  };

  const handleSearch = event => {
    event.preventDefault();
    // Take the item passed into the function
    const filterValue = event.target.value;
    // eslint-disable-next-line array-callback-return
    const filteredList = devState.users.filter(item => {
      let values =
        item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      if (values.indexOf(filterValue.toLowerCase()) !== -1) return item;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataContext.Provider value={{ devState, handleSearch, handleSorting }}>
      <Nav />
      <div className="data-area">
        {devState.userFilter.length > 0 ? <Table /> : <div></div>}
      </div>
    </DataContext.Provider>
  );
};

export default DataArea;
