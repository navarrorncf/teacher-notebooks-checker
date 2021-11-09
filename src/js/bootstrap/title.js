import { getNodeWithInnerHTML } from "../utils/htmlGenerator";

const title = () =>
  getNodeWithInnerHTML("<h1>CONTROLE DE DIÁRIOS</h1>", "div", ["title"]);

export default title;
