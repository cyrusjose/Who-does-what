import React, { useState } from "react";
import API from "../../utils/API";
import "./Data.css";

export default function Data() {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("ascend");
  const [userFilter, setUserFilter] = useState([]);
  const [headings, setHeadings] = useState([
    {
      name: "Name"
    },
    {
      name: "Phone"
    },
    {
      name: "Email"
    },
    {
      name: "DOB"
    }
  ]);

  const handleSorting = heading => {
    if (order === "descend") {
      setOrder("ascend");
    } else {
      setOrder("descend");
    }

    const comparison = (a, b) => {
      if (order === "ascend") {
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

    const userSort = userFilter.sort(comparison);

    setUserFilter(userSort);
  };
 
}
