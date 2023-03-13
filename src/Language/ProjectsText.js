const Text = {
  projects: [
    {
      desc: {
        svenska: [
          "Misty Mind är ett skräckspel som jag utvecklar i spelmotorn Unity. Jag har jobbat på detta spel titt som tätt sedan April 2020.",
        ],
        english: [
          "Misty Mind is a horror game I'm developing in Unity. I've been working on this game on and off since April 2020.",
        ],
      },
      linkTo: "mistymind",
      slideShow: [
        {
          src: "mistyMind/MistyMind_title_TP.png",
          alt: "title",
        },
        {
          src: "mistyMind/Level_1_c.webp",
          alt: "basement",
        },
        {
          src: "mistyMind/Level_2_b_3.webp",
          alt: "basement",
        },
      ],
    },

    {
      desc: {
        svenska: [
          "Shack är ett av de första spelen jag programmerade när jag lärde mig javascript.",
          <br key={0} />,
          <br key={1} />,
          "Länk till spelet: ",
          <a
            href="https://kettler-gamer.github.io/chess/"
            rel="noreferrer"
            target="_blank"
            key={4}>
            https://kettler-gamer.github.io/chess/
          </a>,
        ],
        english: [
          "Chess is one of the first games I made when I learned JavaScript.",
          <br key={0} />,
          <br key={1} />,
          "Link to the game: ",
          <a
            href="https://kettler-gamer.github.io/chess/"
            rel="noreferrer"
            target="_blank"
            key={4}>
            https://kettler-gamer.github.io/chess/
          </a>,
        ],
      },
      linkTo: "chess",
      slideShow: [
        {
          src: "chess/Chess.webp",
          alt: "chess board start",
        },
        {
          src: "chess/chess2.jpg",
          alt: "chess board",
        },
        {
          src: "chess/chess3.jpg",
          alt: "online lobby",
        },
      ],
    },
  ],
  readMore: {
    svenska: "Läs mer",
    english: "Read more",
  },
};

export default Text;
