import appState from "../StateHandler";
import VerticalGroup from "../components/VerticalGroup";
import HorizontalGroup from "../components/HorizontalGroup";
import BimesterBox from "../components/BimesterBox";
import { reportOutput } from "./domElements";
import ReportTitle from "../components/ReportTitle";

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

class ReportHandler {
  constructor(stateHandler) {
    this.reports = stateHandler.getReports();
    this.bimestersConsidered = stateHandler.getBimestersConsidered();
    this.filterType = stateHandler.getFilterType();
    this.pendingOnly = stateHandler.getPendingOnly();
    this.filterOption = stateHandler.getFilterOption();

    stateHandler.subscribe("filterOption", this);
    stateHandler.subscribe("bimestersConsidered", this);
    stateHandler.subscribe("pendingOnly", this);

    this.stateHandler = stateHandler;
  }

  notify() {
    this.update();
  }

  update() {
    console.log("A notification has arrived at ReportHandler!");
    this.reports = this.stateHandler.getReports();
    this.bimestersConsidered = this.stateHandler.getBimestersConsidered();
    this.filterType = this.stateHandler.getFilterType();
    this.pendingOnly = this.stateHandler.getPendingOnly();
    this.filterOption = this.stateHandler.getFilterOption();
    this.output = reportOutput();
    this.renderReport();
  }

  renderReport() {
    this.clearReport();

    if (this.reports.length) {
      const config = reportRowsConfig[this.filterType];

      this.output.append(ReportTitle(this.filterOption));

      const rows = this.reports
        .map((report) => {
          const { bimesters, group, subject } = report;

          let innerContainer, middleContainer, outercontainer;

          const bimestersConsidered = Object.values(bimesters)
            .filter(
              (bimester) => this.bimestersConsidered[bimester.bimesterNumber]
            )
            .filter((bimester) => !this.pendingOnly || !bimester.isClosed)
            .sort((b1, b2) => b1.bimesterNumber - b2.bimesterNumber);

          if (bimestersConsidered.length) {
            innerContainer = config[3].container(
              bimestersConsidered.map((bimester) =>
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
        .filter((row) => !!row);

      if (rows.length) {
        this.output.append(...rows);
      } else {
        this.output.innerHTML =
          '<div class="none-pending"><span>🎉 Nenhuma pendência encontrada 🎉</span></div>';
      }
    } else {
      this.output.innerHTML =
        '<div class="no-option"><span>Por favor, selecione uma opção... 👀</span></div>';
    }
  }

  clearReport() {
    while (this.output.firstChild)
      this.output.removeChild(this.output.firstChild);
  }
}

const reportHandler = new ReportHandler(appState);

export default reportHandler;
