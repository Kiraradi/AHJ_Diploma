import { createDOMElement } from "../../../services/CreateDOMElement";
import { fromTextToHtml } from "../../../services/textHelper";
import { getPosition } from "../../../services/mapService";
import { SERVERURL } from "../../../constants";
import RequestService from "../../../services/requestService";
import ContentMenu from "../contentMenu/ContentMenu";

import "./ChatWindow.css";

export default class ChatWindow {
  constructor(container, messageService) {
    this.container = container;
    this.messageService = messageService;
    this.drawUi();
    this.addDragAndDropEventListeners();
    this.contextMenuOpenedStatus = false;
  }

  drawUi() {
    this.messageService.messagesSubject.subscribe((response) => {
      if (response.status === "connectionWs") {
        this.cleanChatWindow();

        response.messages.forEach((message) => {
          this.container.appendChild(this.getMessageElement(message));
        });

        setTimeout(() => {
          if (
            this.messageService.messagesSubject.value.messages &&
            this.messageService.messagesSubject.value.messages.length > 0
          ) {
            if (this.messageService.messageNumberSubject.value == 0) {
              this.container.scroll({
                top: this.container.scrollHeight,
                behavior: "instant",
              });
            }

            this.messageService.messageNumberSubject.next(
              response.messages[0].number
            );
            this.addScrollEventListener();
          }
        }, 10);
      }
    });

    this.messageService.messagesSubject.subscribe((response) => {
      if (response.status === "sendMessage") {
        this.container.appendChild(
          this.getMessageElement(response.messages[0])
        );
      }
    });

    this.messageService.messagesSubject.subscribe((response) => {
      if (response.status === "toFixMessage") {
        console.log("toFixMessage");
        this.messageService.fixedMessadeSubject.next(response.messages[0]);
      }
    });

    this.container.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const messageEl = e.target.closest(".message-wrapper");
      if (messageEl && !this.contextMenuOpenedStatus) {
        const position = { x: e.clientX, y: e.clientY };
        this.contextMenu = new ContentMenu(
          this.container,
          position,
          messageEl,
          this.messageService
        );
        this.contextMenuOpenedStatus = true;

        this.contextMenu.isElementRemoved.subscribe((isElementRemove) => {
          if (isElementRemove) {
            this.closeContextMenu();
          }
        });
      }
    });

    this.container.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        this.contextMenuOpenedStatus &&
        !e.target.closest(".content-menu-wrapper")
      ) {
        console.log("remove ContextMenu");
        this.contextMenu.removeContentMenuEl();
      }
    });
  }

  closeContextMenu() {
    this.contextMenu = undefined;
    this.contextMenuOpenedStatus = false;
  }

  getMessageElement(message) {
    const messageWrapperEl = createDOMElement("div", ["message-wrapper"]);
    if (message.type === "text") {
      const messageTextEl = createDOMElement("div", ["message-text"]);
      messageTextEl.innerHTML = fromTextToHtml(message.text);
      messageWrapperEl.appendChild(messageTextEl);
    }

    if (message.type === "geolocation") {
      const messageGeolocationEl = createDOMElement("div", [
        "message-geolocation",
      ]);
      messageWrapperEl.appendChild(messageGeolocationEl);
      getPosition(messageGeolocationEl, message.geolocation).then(() => {});
    }

    if (message.type === "file") {
      const fileType = message.fileInfo.type.split("/")[0];
      if (fileType === "image") {
        const messageImageEl = this.createImageEl(message.fileInfo);
        messageWrapperEl.appendChild(messageImageEl);
      } else {
        messageWrapperEl.appendChild(this.createLinkEl(message.fileInfo));
      }
    }

    const messageDateEl = createDOMElement(
      "div",
      ["message-date"],
      message.date
    );
    messageWrapperEl.appendChild(messageDateEl);
    messageWrapperEl.setAttribute("data-number", message.number);

    return messageWrapperEl;
  }

  createImageEl(fileInfo) {
    const imageEl = createDOMElement("img", ["img"]);
    imageEl.src = SERVERURL + "/" + fileInfo.address + "/" + fileInfo.name;

    return imageEl;
  }

  createLinkEl(fileInfo) {
    const linkWrapperEl = createDOMElement("div", ["fileLinkWrapper"]);
    linkWrapperEl.appendChild(
      createDOMElement("i", ["fileLinkIcon", "fa", "fa-file-o", "fa-2x"])
    );

    const linkEl = createDOMElement("div", ["fileLink"], fileInfo.name);
    linkWrapperEl.appendChild(linkEl);

    linkWrapperEl.addEventListener("click", (e) => {
      e.preventDefault();
      this.messageService
        .downloadFile(fileInfo.address, fileInfo.name)
        .then((res) => {
          const newBlob = new Blob([res]);
          const url = window.URL.createObjectURL(newBlob);

          const link = createDOMElement("a");
          link.href = url;
          link.rel = "noopener";
          link.download = fileInfo.name;

          link.click();
        });
    });

    return linkWrapperEl;
  }

  cleanChatWindow() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.lastChild);
    }
  }

  addScrollEventListener() {
    this.container.addEventListener("scroll", (e) => {
      if (
        !e.target.scrollTop &&
        this.messageService.messageNumberSubject.value
      ) {
        this.messageService
          .getMessadesArray(this.messageService.messageNumberSubject.value)
          .then((res) => {
            const arrayMessages = res;
            let lastElement = this.getMessageElement(
              arrayMessages[arrayMessages.length - 1]
            );
            this.container.prepend(lastElement);
            for (let i = arrayMessages.length - 2; i >= 0; i--) {
              this.container.prepend(this.getMessageElement(arrayMessages[i]));
            }
            this.messageService.messageNumberSubject.next(
              arrayMessages[0].number
            );
            this.scrollInToElememt(lastElement);
          });
      }
    });
  }

  scrollInToElememt(element) {
    element.scrollIntoView();
  }

  addDragAndDropEventListeners() {
    let element = createDOMElement("div", ["dragenter"]);
    const elementImg = createDOMElement("i", ["fa", "fa-file-o", "fa-4x"]);

    element.appendChild(elementImg);

    document.body.addEventListener("dragenter", (e) => {
      e.preventDefault();
      if (!document.body.querySelector(".dragenter")) {
        document.body.appendChild(element);
      }
    });

    element.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    element.addEventListener("dragleave", (e) => {
      e.preventDefault();
      const elementInDom = document.body.querySelector(".dragenter");
      if (elementInDom) {
        elementInDom.remove();
      }
    });

    element.addEventListener("drop", (e) => {
      e.preventDefault();

      const elementInDom = document.body.querySelector(".dragenter");
      if (elementInDom) {
        elementInDom.remove();
      }

      const files = Array.from(e.dataTransfer.files);
      RequestService.uploadFile(files[0]);
    });
  }
}
