import React from "react";
import ItemNav from "./ItemNav";

function NavList(props) {
  return (
    <ul className={props.className}>
      <ItemNav page={"/"} displayName={"<Hem />"} setToggle={props.setToggle} />
      <ItemNav
        page={"projects"}
        displayName={"<Projekt />"}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"aboutMe"}
        displayName={"<Om mig />"}
        setToggle={props.setToggle}
      />
    </ul>
  );
}

export default NavList;
