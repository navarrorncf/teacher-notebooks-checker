import { getHTMLElement } from ".";

const getEmptyDiv = (classes) => {
  return getHTMLElement("", "div", true, classes);
};

export default getEmptyDiv;
