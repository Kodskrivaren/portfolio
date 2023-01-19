import React from "react";
import { Link } from "react-router-dom";

function ItemNav(props) {
  function setPage() {
    props.setPage(props.page);
    props.setToggle !== undefined && props.setToggle(false);
  }

  return (
    <li className="list-item">
      <Link
        to={props.page}
        className="item-button"
        onClick={setPage}
        name={props.page}
        style={props.currentPage === props.page ? { color: "#189ab4" } : {}}>
        {props.displayName}
      </Link>
    </li>
  );
}

export default ItemNav;
