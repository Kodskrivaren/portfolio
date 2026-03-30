import ChessText from "./projectsText/ChessText";
import MistyMindText from "./projectsText/MistyMindText";
import ChatApp from "./projectsText/ChatApp";
import Mediabasen from "./projectsText/Mediabasen";
import Venators from "./projectsText/Venators";

const Text = {
  venators: { ...Venators },
  mistyMind: { ...MistyMindText },
  chess: { ...ChessText },
  chatapp: { ...ChatApp },
  mediabasen: { ...Mediabasen },
};

export default Text;
