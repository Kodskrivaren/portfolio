import React from "react";
import "../../styling/stylesheet/main.css";
import Card from "../elements/Card";
import { Link } from "react-router-dom";
import Text from "../../Language/ProjectsText";

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
        pText={Text.mistyMindDesc[props.language]}
        readMore={
          <Link
            to="/portfolio/projects/project/mistymind"
            className="read-more-btn"
            onClick={() => {
              props.scrollToTop();
            }}>
            {Text.readMore[props.language]}
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
        pText={Text.chessDesc[props.language]}
        readMore={
          <Link
            to="/portfolio/projects/project/chess"
            className="read-more-btn"
            onClick={() => {
              props.scrollToTop();
            }}>
            {Text.readMore[props.language]}
          </Link>
        }
      />
    </main>
  );
}

export default Projects;
