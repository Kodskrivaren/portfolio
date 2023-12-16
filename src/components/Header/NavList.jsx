import React from "react";
import ItemNav from "./ItemNav";
import Text from "../../Language/HeaderTexts";

function NavList(props) {
  return (
    <ul className={props.className}>
      <ItemNav
        page={"/"}
        displayName={`<${Text.navText.home[props.language]} />`}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"/projects"}
        displayName={`<${Text.navText.project[props.language]} />`}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"/aboutMe"}
        displayName={`<${Text.navText.aboutme[props.language]} />`}
        setToggle={props.setToggle}
      />
    </ul>
  );
}

export default NavList;
