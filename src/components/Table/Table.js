import React, { useContext } from "react";
import TableBody from "../TableBody";
import "./Table.css";
import DataContext from "../../utils/DataContext";
import Body from "../TableBody/Body";

export default function Table() {
  const context = useContext(DataContext);

  return (
    <div>
      <table>
        {/* Table Header */}
        <thead>
          <tr></tr>
        </thead>
        {/* Table Body */}
        <Body />
      </table>
    </div>
  );
}
