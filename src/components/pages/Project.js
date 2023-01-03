import React from "react";
import Card from "../elements/Card";

function Project(props) {
  return (
    <main className="page-content">
      <Card
        cardClassName="content-project"
        titleImage={props.info.img}
        imageClass="project-image"
        imageAlt="title"
        pClass="project-p"
        pText={props.info.desc}
      />
    </main>
  );
}

export default Project;
