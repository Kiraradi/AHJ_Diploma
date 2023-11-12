import { createDOMElement } from "../../../services/CreateDOMElement";
import { Subject } from "rxjs";
import "./ContentMenu.css";
import RequestService from "../../../services/requestService";

export default class ContentMenu {
  constructor(container, position, messageEl, messageService) {
    this.container = container;
    this.position = position;
    this.messageEl = messageEl;
    this.messageService = messageService;
    this.isElementRemoved = new Subject(false);
    this.drawUi();
  }

  drawUi() {
    this.contentMenuWrapperEl = createDOMElement("div", [
      "content-menu-wrapper",
    ]);

    const contentMenuList = createDOMElement("ul", ["content-menu-list"]);
    contentMenuList.appendChild(this.createFavoriteMessageEl());
    //contentMenuList.appendChild(this.createRemoveMessageEl());

    this.contentMenuWrapperEl.appendChild(contentMenuList);
    this.contentMenuWrapperEl.style.left = this.position.x + "px";
    this.contentMenuWrapperEl.style.top = this.position.y + "px";

    this.container.appendChild(this.contentMenuWrapperEl);
    setTimeout(() => {
      this.contentMenuWrapperEl.classList.add("content-menu-wrapper-opend");
    }, 10);
  }

  createContentMenuButton(buttonText) {
    const contentMenuButtonEl = createDOMElement(
      "li",
      ["content-menu-button"],
      buttonText
    );

    return contentMenuButtonEl;
  }

  createFavoriteMessageEl() {
    const favoriteMessageEl = this.createContentMenuButton(
      "Добавить в избранное"
    );

    favoriteMessageEl.addEventListener("click", (e) => {
      e.preventDefault();
      RequestService.fixedMessage(this.messageEl.dataset.number);
      this.removeContentMenuEl();
    });

    return favoriteMessageEl;
  }

  createRemoveMessageEl() {
    const removeMessageEl = this.createContentMenuButton("Удалить сообщение");

    removeMessageEl.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked by remove message button ");
    });

    return removeMessageEl;
  }

  removeContentMenuEl() {
    this.contentMenuWrapperEl.classList.remove("content-menu-wrapper-opend");
    setTimeout(() => {
      this.contentMenuWrapperEl.remove();
      this.isElementRemoved.next(true);
    }, 900);
  }
}
