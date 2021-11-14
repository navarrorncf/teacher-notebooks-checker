import { getEmptyDiv, getNodeWithInnerText } from "../../utils/htmlGenerator";

import "./style.css";

const UserOptions = () => {
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

  const wrapperDiv = document.createElement("div");

  wrapperDiv.appendChild(filterTypeContainer);

  const pendingOnlyContainer = document.createElement("div");

  const pendingOnlyCheckbox = document.createElement("input");
  pendingOnlyCheckbox.type = "checkbox";
  pendingOnlyCheckbox.name = "pending-only";
  pendingOnlyCheckbox.id = "pending-only";

  const pendingOnlyLabel = document.createElement("label");
  pendingOnlyLabel.setAttribute("for", "pending-only");
  pendingOnlyLabel.innerHTML = "Apenas diários abertos<span></span>";

  pendingOnlyContainer.id = "pending-only-container";
  pendingOnlyContainer.appendChild(pendingOnlyCheckbox);
  pendingOnlyContainer.appendChild(pendingOnlyLabel);

  wrapperDiv.appendChild(pendingOnlyContainer);
  optionsDiv.appendChild(wrapperDiv);

  const bimersterOptionsDiv = document.createElement("div");
  const bimesterOptionsContainer = document.createElement("div");

  bimesterOptionsContainer.appendChild(
    getNodeWithInnerText("Bimestres Considerados", "h3")
  );

  const bimesterCheckboxesDiv = document.createElement("div");
  bimesterCheckboxesDiv.id = "bimester-checkboxes";

  for (let i = 1; i <= 4; i++) {
    const bimesterCheckboxDiv = document.createElement("div");
    bimesterCheckboxDiv.classList.add("bimester-checkbox");
    const identifier = `bimester${i}`;

    const label = document.createElement("label");
    label.innerText = `${i}º`;
    label.setAttribute("for", identifier);

    bimesterCheckboxDiv.appendChild(label);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = identifier;
    input.id = identifier;
    input.checked = true;

    bimesterCheckboxDiv.appendChild(input);

    bimesterCheckboxesDiv.appendChild(bimesterCheckboxDiv);
  }

  bimesterOptionsContainer.appendChild(bimesterCheckboxesDiv);
  bimersterOptionsDiv.appendChild(bimesterOptionsContainer);

  optionsDiv.appendChild(bimersterOptionsDiv);

  const filterOptionContainer = document.createElement("div");
  filterOptionContainer.id = "filter-option-container";

  const filterOptionLabel = document.createElement("label");
  filterOptionLabel.setAttribute("for", "filter-option");
  filterOptionLabel.id = "filter-option-label";

  filterOptionContainer.appendChild(filterOptionLabel);

  const filterOptionSelect = document.createElement("select");
  filterOptionSelect.name = "filter-option";
  filterOptionSelect.id = "filter-option";

  filterOptionContainer.appendChild(filterOptionSelect);

  const filterOptionDiv = document.createElement("div");
  filterOptionDiv.appendChild(filterOptionContainer);

  optionsDiv.appendChild(filterOptionDiv);

  return optionsDiv;
};

export default UserOptions;
