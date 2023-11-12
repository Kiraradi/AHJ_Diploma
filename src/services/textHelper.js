export function fromTextToHtml(text) {
  const regex =
    //eslint-disable-next-line no-useless-escape
    /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/g;

  const linksMatchAll = text.matchAll(regex);
  const linksMatchAllArray = Array.from(linksMatchAll);

  for (let i = linksMatchAllArray.length - 1; i >= 0; i--) {
    const match = linksMatchAllArray[i];
    let link = `<a href="${match[0]}" target="_blank">${text.slice(
      match.index,
      match.index + match[0].length
    )}</a>`;

    text =
      (match.index > 0 ? text.slice(0, match.index) : "") +
      link +
      (match.index + match[0].length < text.length
        ? text.slice(match.index + match[0].length)
        : "");
  }

  return text;
}
