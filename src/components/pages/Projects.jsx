import "../../styling/stylesheet/main.css";
import Card from "../elements/Card";
import { Link } from "react-router-dom";
import Text from "../../Language/ProjectsText";

function Projects(props) {
  return (
    <main className="page-content">
      {Text.projects.map((element, index) => {
        return (
          <Card
            key={"project-card-" + index}
            cardClassName="content-project"
            slideShowClass="project-slideshow"
            slideShow={element.slideShow.map((slideElement, index) => {
              return (
                <img
                  className="slide"
                  key={`${element.linkTo}Slide${index + 1}`}
                  alt={slideElement.alt}
                  src={`/images/projects/${slideElement.src}`}
                />
              );
            })}
            pClass="project-p"
            pText={element.desc[props.language]}
            readMore={
              <Link
                to={`/projects/project/${element.linkTo}`}
                className="read-more-btn"
                onClick={() => {
                  props.scrollToTop();
                }}>
                {Text.readMore[props.language]}
              </Link>
            }
          />
        );
      })}
    </main>
  );
}

export default Projects;
