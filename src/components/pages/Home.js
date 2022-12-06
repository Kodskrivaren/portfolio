import React from "react";
import Card from "../elements/Card";

function Home() {
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
        pText="Utbildad front-end utvecklare med många projekt i ryggsäcken. Har även
        erfarenhet av spelprogrammering i Unity med C#."
      />
      <article className="content-card">
        <h2 className="card-title">Utvecklare med spetskompetens</h2>
        <p className="card-p">lorem ipsum.</p>
      </article>
      <article className="content-card">
        <h2 className="card-title">One Ipsum to rule them all...</h2>
        <p className="card-p">
          One by one, the people of Lorem fell to the power of the Ipsum.
        </p>
      </article>
      <article className="content-card">
        <h2 className="card-title">One Ipsum to rule them all...</h2>
        <p className="card-p">
          One by one, the people of Lorem fell to the power of the Ipsum.
        </p>
      </article>
    </main>
  );
}

export default Home;
