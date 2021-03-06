import appState from "../StateHandler";

import {
  filterTypesSelectInput,
  filterOptionLabel,
  filterOptionsSelectInput,
  pendingOnlyCheckbox,
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
    const filterOptionLabelElement = filterOptionLabel();

    // Updates the label of the option filter input element
    const selectedIndex = filterTypeInput.selectedIndex;
    const selectedOption = filterTypeInput[selectedIndex];
    filterOptionLabelElement.innerText = selectedOption.innerText;

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

    // Fires event so the report is updated
    filterOptionInput.dispatchEvent(new Event("change"));
  }
}

const filtersHandler = new FiltersHandler(appState);

document.addEventListener("DOMContentLoaded", () => {
  const filterTypeInput = filterTypesSelectInput();
  const filterOptionInput = filterOptionsSelectInput();
  const pendingOnlyInput = pendingOnlyCheckbox();

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

  pendingOnlyInput.addEventListener("change", (e) => {
    appState.updatePendingOnly(e.target.checked);
  });

  // Initial report render through an artificial event emitted
  pendingOnlyInput.dispatchEvent(new Event("change"));
});

export default filtersHandler;
