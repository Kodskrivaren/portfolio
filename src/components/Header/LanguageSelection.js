import React, { useEffect } from "react";

export default function LanguageSelection(props) {
  function onLanguageChange(event) {
    const value = event.target.value.toLowerCase();
    props.setLanguage(value);
    window.localStorage.setItem("language", value);
  }

  useEffect(() => {
    const selectElement = document.querySelector(".language-select");
    switch (window.localStorage["language"]) {
      case "svenska":
        selectElement.childNodes[0].selected = "selected";
        break;
      case "english":
        selectElement.childNodes[1].selected = "selected";
        break;
      default:
    }
  }, [props.language]);

  return (
    <select className="language-select" onChange={onLanguageChange}>
      <option id="swedish">Svenska</option>
      <option id="english">English</option>
    </select>
  );
}
