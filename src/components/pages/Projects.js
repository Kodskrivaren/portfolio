import React from "react";
import "../../styling/stylesheet/main.css";
import Card from "../elements/Card";
import ProjectsInfo from "../../db/ProjectsInfo";

function Projects(props) {
  function setProjectPage(info) {
    props.setProjectPage(info);
  }

  return (
    <main className="page-content">
      <Card
        cardClassName="content-project"
        titleImage={"/images/projects/mistyMind/MistyMind_title_TP.png"}
        imageClass="project-image"
        imageAlt="title"
        pClass="project-p"
        pText={[
          "Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag har jobbat på detta spel titt som tätt sedan April 2020.",
        ]}
        readMore={
          <button
            className="read-more-btn"
            onClick={() => {
              setProjectPage(ProjectsInfo[0]);
            }}>
            Läs mer
          </button>
        }
      />
      <Card
        cardClassName="content-project"
        titleImage={"/images/projects/chess/Chess.webp"}
        imageClass="project-image"
        imageAlt="chess board"
        pClass="project-p"
        pText={[
          "Shack är ett av de första spelen jag programmerade när jag lärde mig javascript.",
          <br key={0} />,
          <br key={1} />,
          "Länk till spelet: ",
          <a href="https://kettler-gamer.github.io/chess/" key={4}>
            https://kettler-gamer.github.io/chess/
          </a>,
        ]}
        readMore={
          <button
            className="read-more-btn"
            onClick={() => {
              setProjectPage(ProjectsInfo[1]);
            }}>
            Läs mer
          </button>
        }
      />
    </main>
  );
}

export default Projects;
