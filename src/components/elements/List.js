import React from "react";

function List(props) {
  return (
    <ul className={props.className}>
      {props.listItems.map((element) => (
        <li key={element}>
          <p key={element + "p"}>{element}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
