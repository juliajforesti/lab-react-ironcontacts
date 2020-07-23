import React from "react";

const TableContent = (props) => {
  return (
    <div>
      <td>
        <img src={props.contact.pictureUrl} style={{ height: "100px" }} alt="" />{" "}
      </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity}</td>
      <td>
        <button onClick={() => props.handleDeleteClick(props.contact.id)}>Delete</button>
      </td>
    </div>
  );
};

export default TableContent;
