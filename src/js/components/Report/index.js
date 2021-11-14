import EmptyReport from "../EmptyReport";
import HorizontalGroup from "../HorizontalGroup";
import VerticalGroup from "../VerticalGroup";
import BimesterBox from "../BimesterBox";

import "./styles.css";

const reportRowsConfig = {
  teachers: {
    1: {
      type: "group",
      container: HorizontalGroup,
    },
    2: {
      type: "subject",
      container: HorizontalGroup,
    },
    3: {
      type: "bimesters",
      container: VerticalGroup,
    },
  },
  subjects: {
    1: {
      type: "teacher",
      container: HorizontalGroup,
    },
    2: {
      type: "group",
      container: HorizontalGroup,
    },
    3: {
      type: "bimesters",
      container: VerticalGroup,
    },
  },
  groups: {
    1: {
      type: "subject",
      container: HorizontalGroup,
    },
    2: {
      type: "teacher",
      container: HorizontalGroup,
    },
    3: {
      type: "bimesters",
      container: VerticalGroup,
    },
  },
};

function Report(reports, filterType, bimestersConsidered, pendingOnly) {
  let output = [];

  if (reports.length) {
    const config = reportRowsConfig[filterType];

    const rows = reports
      .map((report) => {
        const { bimesters, group, subject } = report;

        let innerContainer, middleContainer, outercontainer;

        const currentBimesters = Object.values(bimesters)
          .filter((bimester) => bimestersConsidered[bimester.bimesterNumber])
          .filter((bimester) => !pendingOnly || !bimester.isClosed)
          .sort((b1, b2) => b1.bimesterNumber - b2.bimesterNumber);

        if (currentBimesters.length) {
          innerContainer = config[3].container(
            currentBimesters.map((bimester) =>
              BimesterBox(bimester, group, subject)
            )
          );
        }

        if (innerContainer && innerContainer.firstChild) {
          const cell = document.createElement("div");
          cell.classList.add("cell", "column");
          cell.innerText = report[config[2].type];

          middleContainer = config[2].container([cell, innerContainer]);
        }

        if (middleContainer && middleContainer.firstChild) {
          const cell = document.createElement("div");
          cell.classList.add("cell", "column");
          cell.innerText = report[config[1].type];

          outercontainer = config[1].container([cell, middleContainer]);
          outercontainer.classList.add("row");
        }

        return outercontainer ? outercontainer : "";
      })
      .filter((row) => !!row)
      .sort((row1, row2) => {
        const cellRow1 = row1.querySelectorAll(".cell")[0].innerText;
        const cellRow2 = row2.querySelectorAll(".cell")[0].innerText;

        return cellRow1.localeCompare(cellRow2);
      });

    if (rows.length) {
      output = output.concat(rows);
    } else {
      output.push(EmptyReport(true));
    }
  } else {
    output.push(EmptyReport(false));
  }

  return output;
}

export default Report;
