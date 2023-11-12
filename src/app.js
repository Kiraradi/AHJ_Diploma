import Chat from "./modules/Chat/Chat";
const chatWrapperElement = document.querySelector(".chat_wrapper");

const chat = new Chat(chatWrapperElement);

chat.drawUi();
