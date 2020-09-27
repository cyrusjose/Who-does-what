import React, { useContext } from "react";
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
          <tr>
            {context.devState.headings.map(({ name }) => {
              return (
                <th
                  className="col"
                  key={name}
                  // style={{ width }}
                  onClick={() => {
                    context.handleSort(name.toLowerCase());
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
