import React, { useContext } from "react";
import "./Body.css";
import DataContext from "../../utils/DataContext";

export default function Body() {
  const context = useContext(DataContext);
  return(
      <tbody>
          <tr>
              <td>This will be for the name</td>
              <td>This will be for the phone</td>
              <td>This will be for the email</td>
              <td>This will be for the DOB</td>
          </tr>
      </tbody>
  )
}
