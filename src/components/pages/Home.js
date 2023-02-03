import React from "react";
import Card from "../elements/Card";
import List from "../elements/List";
import { Link } from "react-router-dom";
import Text from "../../Language/HomeTexts";

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
      to="/portfolio/projects/project/mistymind"
      onClick={() => {
        props.scrollToTop();
      }}
      key={11}>
      Misty Mind
    </Link>,
    <Link
      to="/portfolio/projects/project/chess"
      onClick={() => {
        props.scrollToTop();
      }}
      key={10}>
      {Text.chess[props.language]}
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
        pText={Text.introduction[props.language]}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText={Text.skills[props.language]}
        pClass="card-p"
        list={<List className="p-list" listItems={skills} />}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText={Text.projects[props.language]}
        pClass="card-p"
        list={<List className="p-list" listItems={projects} />}
      />
    </main>
  );
}

export default Home;
