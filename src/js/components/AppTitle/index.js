import { getNodeWithInnerHTML } from "../../utils/htmlGenerator";

import "./styles.css";

const AppTitle = () =>
  getNodeWithInnerHTML("<h1>CONTROLE DE DIÁRIOS</h1>", "div", ["title"]);

export default AppTitle;
