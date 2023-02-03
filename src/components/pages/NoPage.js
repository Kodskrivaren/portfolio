import React from "react";
import Text from "../../Language/NoPageText";

function NoPage(props) {
  return (
    <main className="page-content">
      <div className="no-page">
        <h2 className="no-page-title">{Text.title[props.language]}</h2>
        <p className="no-page-content">{Text.desc[props.language]}</p>
      </div>
    </main>
  );
}

export default NoPage;
