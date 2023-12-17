export default {
  svenska: [
    <h2 key={`project-title`} className="project-title">
      Schack
    </h2>,
    "Under min front-end utbildning gjorde jag ett Schack spel i webbläsaren vid sidan om mina studier. Man kan spela mot en AI, mot en vän lokalt eller över nätet.",
    <img
      key="chess2"
      className="project-image"
      src={"/images/projects/chess/chess3.jpg"}
      alt="basement"
    />,
    <br key="chessBr1" />,
    <br key="chessBr2" />,
    "Online servern skrev jag i JavaScript och körde lokalt i Node.js. När jag var nöjd med skriptet så skapade jag en server via Microsoft Azure som kör skriptet. Detta gjorde online delen fullt fungerande!",
  ],
  english: [
    <h2 key={`project-title`} className="project-title">
      Chess
    </h2>,
    "During my front-end education I made a chess game for the web browser alongside my studies. You can play against an AI, a friend locally or online.",
    <img
      key="chess2"
      className="project-image"
      src={"/images/projects/chess/chess3.jpg"}
      alt="basement"
    />,
    <br key="chessBr1" />,
    <br key="chessBr2" />,
    "I wrote the online server in JavaScript ran it locally in Node.js. When I was happy with the script I created a server through Microsoft Azure that runs the script. This made the online part fully functional!",
  ],
};
