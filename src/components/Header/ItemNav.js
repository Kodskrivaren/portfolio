import React from "react";

function ItemNav(props) {
  function setPage() {
    props.setPage(props.page);
    props.setToggle !== undefined && props.setToggle(false);
  }

  return (
    <li className="list-item">
      <button className="item-button" onClick={setPage} name={props.page}>
        {props.displayName}
      </button>
    </li>
  );
}

export default ItemNav;
