export default {
  svenska: [
    "Efter en ganska intensiv backend kurs gav jag mig på att göra en chat app. Dock räckte det inte att bara chatta, jag ville få in funktionalitet så man kna ringa sina kontakter.",
    <img
      key="chess2"
      className="project-image"
      src={"/images/projects/chatApp/createChannel.webp"}
      alt="basement"
    />,
    "Min första implementation av ring funktionen var baserad på Socket.IO. Då spelade man in lite av rösten som sedan skickades till den andra kontakten och spelades upp där.",
    "Problemet med den lösningen var att det blev fördröjning på ljudet och hackade till ibland.",
    "Men då bytte jag till PeerJS som var designat för röst/video samtal och det funkade 1000 gånger bättre!",
  ],
  english: [
    "After a pretty intensive backend course I started working on a chat application. Not only for chatting but also making voice calls with contacts.",
    <img
      key="chess2"
      className="project-image"
      src={"/images/projects/chatApp/createChannel.webp"}
      alt="basement"
    />,
    "My first implementation of the call function was with Socket.IO. It recorded a little audio and sent it to the other contact who played it on their client.",
    "The problem with this solution is the long delay and hacky sound that can occur.",
    "But then I switched to PeerJS which is designed for voide/video calls and it worked 1000 times better!",
  ],
};
