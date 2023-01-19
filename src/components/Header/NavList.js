import React from "react";
import ItemNav from "./ItemNav";

function NavList(props) {
  return (
    <ul className={props.className}>
      <ItemNav
        page={"/portfolio/"}
        displayName={"<Hem />"}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"/portfolio/projects"}
        displayName={"<Projekt />"}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"/portfolio/aboutMe"}
        displayName={"<Om mig />"}
        setToggle={props.setToggle}
      />
    </ul>
  );
}

export default NavList;
