import React, { useContext } from "react";
import "./Body.css";
import DataContext from "../../utils/DataContext";

export default function Body() {
  const context = useContext(DataContext);

  const dateFormatting = date => {
    const dateArray = date.split("-");
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day].join("-");
    return formattedDate;
  };
  return (
    <tbody>
      {/* Ternary: Condition if the users are able to be filtered then return all info, otherwise return empty */}
      {context.devState.userFilter[0] !== undefined &&
      context.devState.userFilter[0].name !== undefined ? (
        context.devState.userFilter.map(
          ({ login, picture, name, phone, email, dob }) => {
            return (
              <tr key={login.uuid} className = "rowHover">
                <td data-th="Image" className="employee">
                  <img
                    src={picture.large}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive empImage"
                  />
                </td>
                <td data-th="Name" className="info pt-5 name-cell">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="info pt-5">
                  {phone}
                </td>
                <td data-th="Email" className="info pt-5">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="info pt-5">
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
