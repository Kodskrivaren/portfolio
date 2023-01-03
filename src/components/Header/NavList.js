import React from "react";
import ItemNav from "./ItemNav";

function NavList(props) {
  return (
    <ul className={props.className}>
      <ItemNav
        setPage={props.setPage}
        page={"home"}
        displayName={"<Hem />"}
        setToggle={props.setToggle}
        currentPage={props.currentPage}
      />
      <ItemNav
        setPage={props.setPage}
        page={"projects"}
        displayName={"<Projekt />"}
        setToggle={props.setToggle}
        currentPage={props.currentPage}
      />
      <ItemNav
        setPage={props.setPage}
        page={"aboutMe"}
        displayName={"<Om mig />"}
        setToggle={props.setToggle}
        currentPage={props.currentPage}
      />
    </ul>
  );
}

export default NavList;
