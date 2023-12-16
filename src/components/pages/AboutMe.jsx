import React from "react";
import Card from "../elements/Card";
import List from "../elements/List";
import Text from "../../Language/AboutMeText";

function AboutMe(props) {
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
        pText={Text.mainText[props.language]}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText={Text.miscInfo[props.language]}
        imageAlt="profile"
        pClass="card-p"
        list={
          <List
            className="p-list"
            listItems={Text.miscInfoDesc[props.language]}
          />
        }
      />
    </main>
  );
}

export default AboutMe;
