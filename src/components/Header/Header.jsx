import "../../styling/stylesheet/main.css";
import HeaderNav from "./HeaderNav";
import LanguageSelection from "./LanguageSelection";
import Text from "../../Language/HeaderTexts";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">
        {"<Portfolio />"}
        <p className="title-subtext">{Text.subtext[props.language]}</p>
      </h1>
      <LanguageSelection
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <HeaderNav language={props.language} />
    </header>
  );
}

export default Header;
