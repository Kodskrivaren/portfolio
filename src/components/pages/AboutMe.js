import React from "react";
import Card from "../elements/Card";

function AboutMe() {
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
          "Min resa inom programmering började redan 2019 när jag tog min första onlinekurs i C#. Framåt julen samma år blev jag klar med kursen och började ta andra onlinekurser som riktade in sig på spelprogrammering.",
          <br key={0} />,
          <br key={1} />,
          "",
        ]}
      />
    </main>
  );
}

export default AboutMe;
