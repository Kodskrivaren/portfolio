import React from "react";
import "../../styling/stylesheet/main.css";
import HeaderNav from "./HeaderNav";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">{"<portfolio />"}</h1>
      <HeaderNav setPage={props.setPage} />
    </header>
  );
}

export default Header;
