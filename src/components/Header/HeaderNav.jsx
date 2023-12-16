import { useState } from "react";
import NavList from "./NavList";

function HeaderNav(props) {
  const [toggle, setToggle] = useState(false);

  function toggleNavList() {
    setToggle((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <nav className="header-nav">
      <NavList className={"nav-list"} language={props.language} />
      {toggle && (
        <NavList
          className={"burger-list"}
          language={props.language}
          setToggle={setToggle}
        />
      )}
      <button className="nav-burger" onClick={toggleNavList}>
        <img
          className="burger-image"
          alt="burger menu"
          src={"/images/Burger_Menu_TP.webp"}></img>
      </button>
    </nav>
  );
}

export default HeaderNav;
