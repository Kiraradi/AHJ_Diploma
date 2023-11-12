import { createDOMElement } from "../../../services/DOMElementHelper";
import "./TopBar.css";

export default class TopBar {
  constructor(container, messageService) {
    this.container = container;
    this.messageService = messageService;
    this.drawUi();
  }

  drawUi() {
    const topBarElementWrapper = createDOMElement("div", ["topBar_Wrapper"]);

    const topBarTitle = createDOMElement("h2", ["topBar_Title"], "Useful Chat");
    topBarElementWrapper.appendChild(topBarTitle);
    //topBarElementWrapper.appendChild(this.createButtomListEl());

    const fixedMessageWrapperEl = createDOMElement("div", [
      "fixed-message-wrapper",
    ]);

    const fixedMessageTitleEl = createDOMElement(
      "h2",
      ["fixed-message-title"],
      "Закрепленное сообщение :"
    );
    fixedMessageWrapperEl.appendChild(fixedMessageTitleEl);
    this.fixedMessageContentEl = createDOMElement("div", [
      "fixed-message-content",
    ]);
    fixedMessageWrapperEl.appendChild(this.fixedMessageContentEl);
    //this.fixedMessageContentEl.appendChild(createDOMElement('div', ['test']));
    topBarElementWrapper.appendChild(fixedMessageWrapperEl);

    this.container.appendChild(topBarElementWrapper);
    this.messageService.fixedMessadeSubject.subscribe((message) => {
      if (message) {
        console.log(message);
        this.createFixedMessage(message);
      }
    });
  }

  createButtomListEl() {
    const buttomList = createDOMElement("ul", ["button_list"]);

    const settingMenuToggleButton = createDOMElement("li", [
      "fa",
      "fa-window-maximize",
      "button-style",
    ]);

    buttomList.appendChild(settingMenuToggleButton);

    return buttomList;
  }

  createFixedMessage(message) {
    console.log(Array.from(this.fixedMessageContentEl.childNodes));

    if (Array.from(this.fixedMessageContentEl.childNodes).length !== 0) {
      this.removeFixedElement(
        Array.from(this.fixedMessageContentEl.childNodes)
      );
    }

    let fixedMessageText;
    if (message.type === "text") {
      fixedMessageText = createDOMElement(
        "div",
        ["fixed-message-text"],
        message.text
      );
      this.fixedMessageContentEl.appendChild(fixedMessageText);
    } else if (message.type === "geolocation") {
      fixedMessageText = createDOMElement(
        "div",
        ["fixed-message-geolocation"],
        `geolocation: ${message.geolocation[0]} - ${message.geolocation[1]}`
      );
      this.fixedMessageContentEl.appendChild(fixedMessageText);
    } else if (message.type === "file") {
      console.log(message);
      const linkEl = createDOMElement(
        "div",
        ["fileLink"],
        message.fileInfo.name
      );

      linkEl.addEventListener("click", (e) => {
        e.preventDefault();
        this.messageService
          .downloadFile(message.fileInfo.address, message.fileInfo.name)
          .then((res) => {
            const newBlob = new Blob([res]);
            const url = window.URL.createObjectURL(newBlob);

            const link = createDOMElement("a");
            link.href = url;
            link.rel = "noopener";
            link.download = message.fileInfo.name;

            link.click();
          });
      });
      this.fixedMessageContentEl.appendChild(linkEl);
    }

    const fixedMessageDate = createDOMElement(
      "div",
      ["fixed-message-date"],
      message.date
    );
    this.fixedMessageContentEl.appendChild(fixedMessageDate);
  }

  removeFixedElement(elementsArray) {
    elementsArray.forEach((element) => {
      element.remove();
    });
  }
}
