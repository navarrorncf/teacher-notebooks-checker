import appState from "../StateHandler";

import {
  filterTypesSelectInput,
  filterOptionLabel,
  filterOptionsSelectInput,
} from "./domElements";

import SelectInputOption from "../components/SelectInputOption";

class FiltersHandler {
  constructor(stateHandler) {
    this.options = stateHandler.getOptions();
    this.stateHandler = stateHandler;

    this.stateHandler.subscribe("filterType", this);
  }

  notify() {
    console.log("A notification has arrived at FiltersHandler!");
    this.update();
  }

  update() {
    this.options = this.stateHandler.getOptions();
    this.renderOptions();
  }

  renderOptions() {
    // Gets the reference of dom elements
    const filterTypeInput = filterTypesSelectInput();
    const filterOptionInput = filterOptionsSelectInput();

    // Updates the label of the option filter input element
    const selectedIndex = filterTypeInput.selectedIndex;
    const selectedOption = filterTypeInput[selectedIndex];
    filterOptionLabel.innerText = selectedOption.innerText;

    // Clears previous options
    while (filterOptionInput.firstChild) {
      filterOptionInput.remove(filterOptionInput.firstChild);
    }

    // Appends new options
    filterOptionInput.append(
      ...["Selecione uma opção", ...this.options].map((option) =>
        SelectInputOption(option)
      )
    );
  }
}

const filtersHandler = new FiltersHandler(appState);

document.addEventListener("DOMContentLoaded", () => {
  const filterTypeInput = filterTypesSelectInput();
  const filterOptionInput = filterOptionsSelectInput();

  filterTypeInput.append(
    ...[
      ["Professor", "teachers"],
      ["Disciplina", "subjects"],
      ["Turma", "groups"],
    ].map(([label, value]) => SelectInputOption(label, value))
  );

  filtersHandler.renderOptions();

  filterTypeInput.addEventListener("change", (e) => {
    appState.updateFilterType(e.target.value);
  });

  filterOptionInput.addEventListener("change", (e) => {
    appState.updateFilterOption(e.target.value);
  });
});

export default filtersHandler;
