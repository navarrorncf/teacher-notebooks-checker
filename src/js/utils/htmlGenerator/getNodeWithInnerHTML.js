import { getHTMLElement } from ".";

const getNodeWithInnerHTML = (content, type, classes) =>
  getHTMLElement(content, type, true, classes);

export default getNodeWithInnerHTML;
