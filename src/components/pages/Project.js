import React from "react";
import Card from "../elements/Card";
import { Routes, Route } from "react-router-dom";
import ProjectsInfo from "../../db/ProjectsInfo";
import NoPage from "./NoPage";

function Project() {
  return (
    <main className="page-content">
      <Routes>
        <Route
          path="mistymind"
          element={
            <Card
              cardClassName="content-project"
              titleImage={ProjectsInfo[0].img}
              imageClass="project-image"
              imageAlt="title"
              pClass="project-p"
              pText={ProjectsInfo[0].desc}
            />
          }></Route>
        <Route
          path="chess"
          element={
            <Card
              cardClassName="content-project"
              titleImage={ProjectsInfo[1].img}
              imageClass="project-image"
              imageAlt="title"
              pClass="project-p"
              pText={ProjectsInfo[1].desc}
            />
          }></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </main>
  );
}

export default Project;
