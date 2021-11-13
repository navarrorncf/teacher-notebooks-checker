export const filterOptionContainer = () =>
  document.querySelector("#filter-option-container");

export const pendingOnlyCheckbox = () =>
  document.querySelector("#pending-only");

export const reportOutput = () => document.querySelector("#report-container");

export const filterTypesContainer = () =>
  document.querySelector("#filter-type-container");

export const bimestersCheckboxContainer = () =>
  document.querySelector("#bimester-checkboxes");

export const filterOptionLabel = () =>
  filterOptionContainer().querySelector("label");

export const filterOptionsSelectInput = () =>
  filterOptionContainer().querySelector("select");

export const filterTypesSelectInput = () =>
  filterTypesContainer().querySelector("select");
