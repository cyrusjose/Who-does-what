import React, { useContext } from "react";
import "./Table.css";
import DataContext from "../../utils/DataContext";
import Body from "../TableBody/Body";

export default function Table() {
  const context = useContext(DataContext);

  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-condensed"
      >
        {/* Table Header */}
        <thead>
          <tr className="info text-center">
            {context.devState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSorting(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        {/* Table Body */}
        <Body />
      </table>
    </div>
  );
}
