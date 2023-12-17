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
    <p key={26}>NodeJS</p>,
    <p key={27}>MongoDB</p>,
    <p key={28}>MySQL</p>,
    <p key={29}>Git/Github</p>,
    <p key={30}>Blender</p>,
  ];

  const projects = [
    <Link
      to="/projects/project/mistymind"
      onClick={() => {
        props.scrollToTop();
      }}
      key={11}>
      Misty Mind
    </Link>,
    <Link
      to="/projects/project/chess"
      onClick={() => {
        props.scrollToTop();
      }}
      key={10}>
      {Text.chess[props.language]}
    </Link>,
    <Link
      to="/projects/project/chatapp"
      onClick={() => {
        props.scrollToTop();
      }}
      key={12}>
      Chat App
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
        cardTitleText={Text.projects[props.language]}
        pClass="card-p"
        list={<List className="p-list" listItems={projects} />}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText={Text.skills[props.language]}
        pClass="card-p"
        list={<List className="p-list" listItems={skills} />}
      />
    </main>
  );
}

export default Home;
