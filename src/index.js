import { getEmptyDiv } from "./js/utils/htmlGenerator";

import bootstrap from "./js/bootstrap";

/*
 * HTML STRUCTURE BOOSTRAPPING
 */

const container = getEmptyDiv(["container"]);

container.append(
  bootstrap.title(),
  bootstrap.options(),
  bootstrap.reportContainer()
);

document.querySelector("body").appendChild(container);
