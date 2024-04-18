export default {
  svenska: [
    <h2 key={`project-title`} className="project-title">
      Schack
    </h2>,
    "Under min frontend utbildning gjorde jag ett Schack spel i webbläsaren vid sidan om mina studier. Man kan spela mot en AI, mot en vän lokalt eller över nätet.",
    <img
      key="chess2"
      className="project-image"
      src={"/images/projects/chess/chess3.jpg"}
      alt="basement"
    />,
    "Online servern skrev jag i NodeJS och när jag var nöjd med skriptet så laddade jag upp det på min server på Contabo.",
    <a
      key={"link-to-game"}
      href="https://chess.kodskrivaren.se"
      target="_blank">
      Länk till spelet
    </a>,
  ],
  english: [
    <h2 key={`project-title`} className="project-title">
      Chess
    </h2>,
    "During my frontend education I made a chess game for the web browser alongside my studies. You can play against an AI, a friend locally or online.",
    <img
      key="chess2"
      className="project-image"
      src={"/images/projects/chess/chess3.jpg"}
      alt="basement"
    />,
    "The online server was made in NodeJS and when I was content with it I published the game on my server from Contabo.",
    <a
      key={"link-to-game"}
      href="https://chess.kodskrivaren.se"
      target="_blank">
      Link to the game
    </a>,
  ],
};
