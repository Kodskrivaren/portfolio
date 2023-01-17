import React from "react";
import Card from "../elements/Card";
import List from "../elements/List";

function AboutMe() {
  const miscInfo = [
    <p key="misc1">Körkort: B</p>,
    <p key="misc2">Kommun: Katrineholm</p>,
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
          "Min resa inom programmering började redan 2019 när jag tog min första onlinekurs i C#. Framåt julen samma år blev jag klar med kursen och började ta andra onlinekurser som riktade in sig på spelprogrammering.",
          <br key={0} />,
          <br key={1} />,
          "",
        ]}
      />
      <Card
        cardClassName="content-card"
        cardTitleClassName="card-title"
        cardTitleText="Övrig info"
        imageAlt="profile"
        pClass="card-p"
        list={<List className="p-list" listItems={miscInfo} />}
      />
    </main>
  );
}

export default AboutMe;
