import { getExpectedClasses } from "../../utils";

import "./styles.css";

const getClassesValidationStyle = (expected, actual) =>
  expected > actual
    ? "classes-insuficient"
    : expected === actual
    ? "classes-suficient"
    : "classes-excess";

const getStatusValidationStyle = (isClosed) => (isClosed ? "closed" : "open");

const BimesterBox = (bimester, group, subject) => {
  const { bimesterNumber, isClosed, classes } = bimester;
  const expectedClasses = getExpectedClasses(subject, group, bimesterNumber);
  const classesStyle = getClassesValidationStyle(expectedClasses, classes);
  const statusStyle = getStatusValidationStyle(isClosed);

  const bimesterBox = document.createElement("div");
  bimesterBox.classList.add("bimester", statusStyle);

  const statusHTML = `${bimesterNumber}º bimestre <b>${
    isClosed ? "fechado" : "aberto"
  }</b><span class="status">${isClosed ? "✓" : "✗"}</span></br>`;
  const classesHTML = `<span class="${classesStyle}">${classes} de ${expectedClasses} aulas lançadas`;

  bimesterBox.innerHTML = statusHTML + classesHTML;

  return bimesterBox;
};

export default BimesterBox;
