import React from "react";
import Card from "../elements/Card";
import List from "../elements/List";

function Home() {
  const skills = [
    "C#",
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Unity",
    "Blender",
    "Kanban",
  ];

  const projects = ["Schack", "Misty Mind (Skräckspel)"];

  return (
    <main className="page-content">
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText="Filip Blomqvist"
        titleImage={process.env.PUBLIC_URL + "/images/ProfilePic.webp"}
        imageClass="card-image"
        imageAlt="profile"
        pClass="card-p"
        pText={[
          "Utbildad front-end utvecklare med många projekt i ryggsäcken. Har även erfarenhet av spelprogrammering i Unity med C#.",
        ]}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText="Färdigheter"
        pClass="card-p"
        list={<List className="p-list" listItems={skills} />}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText="Projekt"
        pClass="card-p"
        list={<List className="p-list" listItems={projects} />}
      />
    </main>
  );
}

export default Home;
