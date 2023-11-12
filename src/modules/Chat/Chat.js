import { createDOMElement } from "../../services/CreateDOMElement";
import MessageService from "../../services/messageService";
import "./Chat.css";
import TopBar from "./TopBar/TopBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import BottomBar from "./BottomBar/BottomBar";

export default class Chat {
  constructor(container) {
    this.container = container;
    this.messageService = new MessageService();
  }

  drawUi() {
    const topBarElement = createDOMElement("div", ["topBar"]);
    this.container.appendChild(topBarElement);

    const chatWindowElement = createDOMElement("div", ["chat-window"]);
    this.container.appendChild(chatWindowElement);

    const bottomBarElement = createDOMElement("div", ["bottom-bar"]);
    this.container.appendChild(bottomBarElement);

    const topBar = new TopBar(topBarElement, this.messageService);
    this.chatWindow = new ChatWindow(chatWindowElement, this.messageService);
    const bottomBar = new BottomBar(bottomBarElement, this.messageService);
  }
}
