import React from "react";
import "../../styling/stylesheet/main.css";
import Card from "../elements/Card";

function Projects() {
  return (
    <main className="page-content">
      <Card
        cardClassName="content-project"
        cardTitleClassName="project-title"
        cardTitleText="Misty Mind"
        pClass="project-p"
        pText="Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag
        har jobbat på detta spel titt som tätt sedan April 2020."
      />
      <Card
        cardClassName="content-project"
        titleImage={process.env.PUBLIC_URL + "/images/MistyMind_title_TP.png"}
        imageClass="project-image"
        imageAlt="title"
        pClass="project-p"
        pText="Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag
        har jobbat på detta spel titt som tätt sedan April 2020."
      />
    </main>
  );
}

export default Projects;
