import { getEmptyDiv, getNodeWithInnerHTML } from "./js/utils/htmlGenerator";

/*
 * HTML STRUCTURE BOOSTRAPPING
 */

const container = getEmptyDiv(["container"]);

container.appendChild(
  getNodeWithInnerHTML("<h1>CONTROLE DE DIÁRIOS</h1>", "div", ["title"])
);

const optionsDiv = getEmptyDiv(["options"]);

const filterTypeContainer = document.createElement("div");

const filterTypeLabel = document.createElement("label");
filterTypeLabel.setAttribute("for", "filter-type");
filterTypeLabel.innerText = "Filtrar por";

const filterTypeSelect = document.createElement("select");
filterTypeSelect.name = "filter-type";
filterTypeSelect.id = "filter-type";

filterTypeContainer.id = "filter-type-container";
filterTypeContainer.appendChild(filterTypeLabel);
filterTypeContainer.appendChild(filterTypeSelect);

optionsDiv.appendChild(filterTypeContainer);

const body = document.querySelector("body");

body.appendChild(container);
body.appendChild(optionsDiv);
