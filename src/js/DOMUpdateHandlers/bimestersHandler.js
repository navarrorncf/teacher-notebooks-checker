import appState from "../StateHandler";

import { bimestersCheckboxContainer } from "./domElements";

document.addEventListener("DOMContentLoaded", () => {
  const bimestersCheckboxes = bimestersCheckboxContainer();

  bimestersCheckboxes.addEventListener("change", (e) => {
    const bimester = parseInt(e.target.id.match(/[1-4]/));
    const value = e.target.checked;

    appState.updateBimestersConsidered(bimester, value);
  });
});
