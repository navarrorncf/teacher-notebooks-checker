import { getHTMLElement } from ".";

const getNodeWithInnerText = (content, type, classes) =>
  getHTMLElement(content, type, false, classes);

export default getNodeWithInnerText;
