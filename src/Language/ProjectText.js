const Text = {
  mistyMind: {
    svenska: [
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
    english: [
      "Misty Mind is a horror game in first person view where the player explores a mansion where a dangerous monster wandering around. ",
      "I started working on the game in April 2020 where I developed a prototype." +
        " Later in August I spent my 3 week vacation on completing a playable demo.",
      <br key="break1" />,
      <br key="break2" />,
      "I made almost everything from the ground up. 3D environments, programming, SFX, music, UI and so on. " +
        "I took a course in 3D modeling with Blender so I could make a unique monster for the game. " +
        "Misty Mind is my most ambitious project.",
      <img
        key="Misty1"
        className="project-image"
        src={
          process.env.PUBLIC_URL + "/images/projects/mistyMind/Level_2_b_3.webp"
        }
        alt="hallway"
      />,
      "The player will solve puzzles and try to avoid the monster who is patrolling the corridors. " +
        "The player has no access to weapons or any defense items and has to stay hidden or run away from the monster if they are detected.",
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
  chess: {
    svenska: [
      "Under min front-end utbildning gjorde jag ett Schack spel i webbläsaren vid sidan om mina studier. Man kan spela mot en AI, mot en vän lokalt eller över nätet.",
      <img
        key="chess2"
        className="project-image"
        src={process.env.PUBLIC_URL + "/images/projects/chess/chess3.jpg"}
        alt="basement"
      />,
      <br key="chessBr1" />,
      <br key="chessBr2" />,
      "Online servern skrev jag i JavaScript och körde lokalt i Node.js. När jag var nöjd med skriptet så skapade jag en server via Microsoft Azure som kör skriptet. Detta gjorde online delen fullt fungerande!",
      <br key="chessBr3" />,
      <br key="chessBr4" />,
      "Länk till spelet: ",
      <a href="https://kettler-gamer.github.io/chess/" key={4}>
        https://kettler-gamer.github.io/chess/
      </a>,
    ],
    english: [
      "During my front-end education I made a chess game for the web browser alongside my studies. You can play against an AI, a friend locally or online.",
      <img
        key="chess2"
        className="project-image"
        src={process.env.PUBLIC_URL + "/images/projects/chess/chess3.jpg"}
        alt="basement"
      />,
      <br key="chessBr1" />,
      <br key="chessBr2" />,
      "I wrote the online server in JavaScript ran it locally in Node.js. When I was happy with the script I created a server through Microsoft Azure that runs the script. This made the online part fully functional!",
      <br key="chessBr3" />,
      <br key="chessBr4" />,
      "Link to the game: ",
      <a href="https://kettler-gamer.github.io/chess/" key={4}>
        https://kettler-gamer.github.io/chess/
      </a>,
    ],
  },
};

export default Text;
