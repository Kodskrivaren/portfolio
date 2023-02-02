import React from "react";
import "../../styling/stylesheet/main.css";
import Card from "../elements/Card";
import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <main className="page-content">
      <Card
        cardClassName="content-project"
        slideShowClass="project-slideshow"
        slideShow={[
          <img
            key="mmSlide1"
            className="slide"
            src={
              process.env.PUBLIC_URL +
              "/images/projects/mistyMind/MistyMind_title_TP.png"
            }
            alt="title"
          />,
          <img
            key="mmSlide2"
            className="slide"
            src={
              process.env.PUBLIC_URL +
              "/images/projects/mistyMind/Level_1_c.webp"
            }
            alt="basement"
          />,
          <img
            key="mmSlide3"
            className="slide"
            src={
              process.env.PUBLIC_URL +
              "/images/projects/mistyMind/Level_2_b_3.webp"
            }
            alt="basement"
          />,
        ]}
        pClass="project-p"
        pText={[
          "Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag har jobbat på detta spel titt som tätt sedan April 2020.",
        ]}
        readMore={
          <Link
            to="/portfolio/projects/project/mistymind"
            className="read-more-btn"
            onClick={() => {
              props.scrollToTop();
            }}>
            Läs mer
          </Link>
        }
      />
      <Card
        cardClassName="content-project"
        slideShowClass="project-slideshow"
        slideShow={[
          <img
            key="chessSlide1"
            className="slide"
            src={process.env.PUBLIC_URL + "/images/projects/chess/Chess.webp"}
            alt="title"
          />,
          <img
            key="chessSlide2"
            className="slide"
            src={process.env.PUBLIC_URL + "/images/projects/chess/chess2.jpg"}
            alt="basement"
          />,
          <img
            key="chessSlide3"
            className="slide"
            src={process.env.PUBLIC_URL + "/images/projects/chess/chess3.jpg"}
            alt="basement"
          />,
        ]}
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
          <Link
            to="/portfolio/projects/project/chess"
            className="read-more-btn"
            onClick={() => {
              props.scrollToTop();
            }}>
            Läs mer
          </Link>
        }
      />
    </main>
  );
}

export default Projects;
