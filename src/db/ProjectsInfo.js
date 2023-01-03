const infos = [
  {
    title: "Misty Mind",
    img: "/images/projects/mistyMind/MistyMind_title_TP.png",
    desc: [
      "Misty Mind började jag jobba på i April 2020 då jag började jobba på en prototyp till spelet. Senare i augusti spenderade jag min semester på att få till ett demo som mina vänner och kollegor kunde testa.",
      <img
        key={0}
        className="project-image"
        src={
          process.env.PUBLIC_URL + "/images/projects/mistyMind/Level_2_b_3.webp"
        }
        alt="hallway"
      />,
      "Jag fick ganska bra respons och bestämde mig för att fortsätta jobba på spelet. ",
      <img
        key={1}
        className="project-image"
        src={
          process.env.PUBLIC_URL + "/images/projects/mistyMind/Level_1_c.webp"
        }
        alt="basement"
      />,
    ],
  },
  {
    title: "Schack",
    img: "/images/projects/chess/chess2.jpg",
    desc: [
      "Under min front-end utbildning gjorde jag ett Schack spel i webbläsaren vid sidan om mina studier. Man kan spela mot en AI, mot en vän lokalt eller över nätet.",
      <img
        key="chess2"
        className="project-image"
        src={process.env.PUBLIC_URL + "/images/projects/chess/chess3.jpg"}
        alt="basement"
      />,
    ],
  },
];

export default infos;
