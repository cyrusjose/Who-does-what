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
}
