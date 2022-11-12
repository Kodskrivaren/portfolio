import React from "react";

function ProjectCard(props) {
  return (
    <div className="content-card">
      {props.titleImage !== "" ? (
        <img className="card-image" src={props.titleImage} alt="title" />
      ) : (
        <h3 className="card-title">Misty Mind</h3>
      )}
      <p className="card-p">
        Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag
        har jobbat på detta spel titt som tätt sedan April 2020.
      </p>
    </div>
  );
}

export default ProjectCard;
