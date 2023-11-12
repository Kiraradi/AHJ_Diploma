export function createDOMElement(tagName, classNameArray, textContent) {
  const DOMElement = document.createElement(tagName);

  if (classNameArray && classNameArray.length > 0) {
    classNameArray.forEach((className) => {
      DOMElement.classList.add(className);
    });
  }

  if (textContent) {
    DOMElement.textContent = textContent;
  }

  return DOMElement;
}
