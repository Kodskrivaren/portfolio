import React from "react";
import Card from "../elements/Card";
import List from "../elements/List";
import ProjectsInfo from "../../db/ProjectsInfo";

function Home(props) {
  const skills = [
    <p key={20}>C#</p>,
    <p key={21}>JavaScript</p>,
    <p key={22}>CSS</p>,
    <p key={23}>HTML</p>,
    <p key={24}>React</p>,
    <p key={25}>Unity</p>,
    <p key={26}>Blender</p>,
  ];

  const projects = [
    <button
      onClick={() => {
        props.setProjectPage(ProjectsInfo[0]);
      }}
      key={11}>
      Misty Mind
    </button>,
    <button
      onClick={() => {
        props.setProjectPage(ProjectsInfo[1]);
      }}
      key={10}>
      Schack
    </button>,
  ];

  return (
    <main className="page-content">
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText="Filip Blomqvist"
        titleImage={"/images/ProfilePic.webp"}
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
