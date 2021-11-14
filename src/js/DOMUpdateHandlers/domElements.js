import { options, reportContainer } from "../../App";

export const filterOptionContainer = () =>
  options.querySelector("#filter-option-container");

export const pendingOnlyCheckbox = () => options.querySelector("#pending-only");

export const reportOutput = () => reportContainer;

export const filterTypesContainer = () =>
  options.querySelector("#filter-type-container");

export const bimestersCheckboxContainer = () =>
  options.querySelector("#bimester-checkboxes");

export const filterOptionLabel = () =>
  options.querySelector("filter-option-label");

export const filterOptionsSelectInput = () =>
  options.querySelector("#filter-option");

export const filterTypesSelectInput = () =>
  options.querySelector("#filter-type");
