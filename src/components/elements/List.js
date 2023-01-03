import React from "react";

function List(props) {
  return (
    <ul className={props.className}>
      {props.listItems.map((element) => {
        return <li key={element.props.children + "li"}>{element}</li>;
      })}
    </ul>
  );
}

export default List;
