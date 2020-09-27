import React, { useContext } from "react";
import "./Body.css";
import DataContext from "../../utils/DataContext";

export default function Body() {
  const context = useContext(DataContext);

  const dateFormatting = date => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  };
  return (
    <tbody>
      {/* Ternary: Condition if the users are able to be filtered then return all info, otherwise return empty */}
      {context.devState.userFilter[0] !== undefined &&
      context.devState.userFilter[0].name !== undefined ? (
        context.devState.userFilter.map(
          ({ login, name, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {dateFormatting(dob.date)}
                </td>
              </tr>
            );
          }
        )
      ) : (
        <></>
      )}
    </tbody>
  );
}
