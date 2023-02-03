import React from "react";
import ItemNav from "./ItemNav";
import Text from "../../Language/HeaderTexts";

function NavList(props) {
  return (
    <ul className={props.className}>
      <ItemNav
        page={"/portfolio/"}
        displayName={`<${Text.navText.home[props.language]} />`}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"/portfolio/projects"}
        displayName={`<${Text.navText.project[props.language]} />`}
        setToggle={props.setToggle}
      />
      <ItemNav
        page={"/portfolio/aboutMe"}
        displayName={`<${Text.navText.aboutme[props.language]} />`}
        setToggle={props.setToggle}
      />
    </ul>
  );
}

export default NavList;
