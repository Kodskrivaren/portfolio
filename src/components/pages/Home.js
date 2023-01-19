import React from "react";
import Card from "../elements/Card";
import List from "../elements/List";
import ProjectsInfo from "../../db/ProjectsInfo";
import { Link } from "react-router-dom";

function Home(props) {
  const skills = [
    <p key={20}>C#</p>,
    <p key={21}>JavaScript</p>,
    <p key={22}>CSS</p>,
    <p key={23}>HTML</p>,
    <p key={24}>React</p>,
    <p key={25}>Unity</p>,
    <p key={27}>Node</p>,
    <p key={28}>Git/Github</p>,
    <p key={26}>Blender</p>,
  ];

  const projects = [
    <Link
      to="../projects/project"
      onClick={() => {
        props.setProjectPage(ProjectsInfo[0]);
      }}
      key={11}>
      Misty Mind
    </Link>,
    <Link
      to="../projects/project"
      onClick={() => {
        props.setProjectPage(ProjectsInfo[1]);
      }}
      key={10}>
      Schack
    </Link>,
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
          `Hej! Jag utbildar mig till front-end utvecklare och förväntas vara klar våren 2024! Har kunskaper inom HTML, CSS och javascript men även inom ramverket React. Har tidigare programmerat mycket i C# på fritiden och har erfarenheter av Unity.`,
          <br key={"main-key-1"} />,
          <br key={"main-key-2"} />,
          "Jag är i behov av en LIA-plats för min utbildning, från 27-11-2023 till 12-04-2024.",
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
