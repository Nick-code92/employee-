import React from "react";

function Row (props) {
    return (
      <tr>
          <td>{props.name}</td>
          <td>{props.gender}</td>
          <td>{props.email}</td>
          <td>{props.age}</td>
          <td>{props.city}</td>
          <td>{props.id}</td>
          
      </tr>
    )
}

export default Row;

