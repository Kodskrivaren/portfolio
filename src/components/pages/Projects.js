import React from "react";
import "../../styling/stylesheet/main.css";
import Card from "../elements/Card";

function Projects() {
  return (
    <main className="page-content">
      <Card
        cardClassName="content-project"
        titleImage={process.env.PUBLIC_URL + "/images/MistyMind_title_TP.png"}
        imageClass="project-image"
        imageAlt="title"
        pClass="project-p"
        pText={[
          "Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag har jobbat på detta spel titt som tätt sedan April 2020.",
        ]}
      />
      <Card
        cardClassName="content-project"
        titleImage={process.env.PUBLIC_URL + "/images/Chess.webp"}
        imageClass="project-image"
        imageAlt="chess board"
        pClass="project-p"
        pText={[
          "Shack är ett av de första spelen jag programmerade när jag lärde mig javascript.",
          <br key={0} />,
          <br key={1} />,
          "Man kan spela mot en AI, mot en vän lokalt på datorn eller över nätet.",
          <br key={2} />,
          <br key={3} />,
          "Länk till spelet: ",
          <a href="https://kettler-gamer.github.io/chess/" key={4}>
            https://kettler-gamer.github.io/chess/
          </a>,
        ]}
      />
    </main>
  );
}

export default Projects;
