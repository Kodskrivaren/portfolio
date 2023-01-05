const infos = [
  {
    title: "Misty Mind",
    img: "/images/projects/mistyMind/MistyMind_title_TP.png",
    desc: [
      "Misty Mind är ett skräckspel i första persons synvinkel där man utforskar en herrgård där ett farligt monster vandrar runt. ",
      "Jag började jobba på spelet April 2020 då jag utvecklade en prototyp." +
        " Senare i augusti spenderade jag mina 3 veckors semester på att få till ett demo.",
      <br key="break1" />,
      <br key="break2" />,
      "Jag gjorde nästan allting från grunden. 3D miljöer, programmering, ljudeffekter, musik, UI osv. " +
        "Jag tog en kurs i 3D modellering med Blender så jag kunde göra ett unikt monster till spelet. " +
        "Misty Mind är mitt mest ambitiösa projekt.",
      <img
        key="Misty1"
        className="project-image"
        src={
          process.env.PUBLIC_URL + "/images/projects/mistyMind/Level_2_b_3.webp"
        }
        alt="hallway"
      />,
      "Under spelets gång får man lösa pussel och försöka undvika monstret som patrullerar runt korridorerna. " +
        "Spelaren har inga vapen att försvara sig med utan man måste hålla sig gömd eller springa ifrån monstret om man blir upptäckt.",
      <img
        key="Misty2"
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
      <br key="chessBr1" />,
      <br key="chessBr2" />,
      "Länk till spelet: ",
      <a href="https://kettler-gamer.github.io/chess/" key={4}>
        https://kettler-gamer.github.io/chess/
      </a>,
    ],
  },
];

export default infos;
