import React from "react";
import "../styling/stylesheet/main.css";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">Filips Portfolio</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="list-item">
            <button
              className="item-button"
              onClick={() => {
                props.setPage("home");
              }}
              name="hem">
              Hem
            </button>
          </li>
          <li className="list-item">
            <button
              className="item-button"
              onClick={() => {
                props.setPage("projects");
              }}
              name="projekt">
              Projekt
            </button>
          </li>
          <li className="list-item">
            <button
              className="item-button"
              onClick={() => {
                props.setPage("aboutMe");
              }}
              name="om mig">
              Om mig
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
