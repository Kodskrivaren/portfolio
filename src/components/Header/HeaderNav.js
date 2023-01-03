import React, { useState } from "react";
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
      <NavList
        className={"nav-list"}
        setPage={props.setPage}
        currentPage={props.currentPage}
      />
      {toggle && (
        <NavList
          className={"burger-list"}
          setPage={props.setPage}
          currentPage={props.currentPage}
          setToggle={setToggle}
        />
      )}
      <button className="nav-burger" onClick={toggleNavList}>
        <img
          className="burger-image"
          alt="burger menu"
          src={process.env.PUBLIC_URL + "/images/Burger_Menu_TP.webp"}></img>
      </button>
    </nav>
  );
}

export default HeaderNav;
