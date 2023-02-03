import React from "react";
import Card from "../elements/Card";
import { Routes, Route } from "react-router-dom";
import ProjectsInfo from "../../db/ProjectsInfo";
import NoPage from "./NoPage";

function Project(props) {
  return (
    <main className="page-content">
      <Routes>
        {ProjectsInfo.map((element) => {
          return (
            <Route
              key={element.path}
              path={element.path}
              element={
                <Card
                  cardClassName="content-project"
                  titleImage={element.img}
                  imageClass="project-image"
                  imageAlt="title"
                  pClass="project-p"
                  pText={element.desc[props.language]}
                />
              }></Route>
          );
        })}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </main>
  );
}

export default Project;
