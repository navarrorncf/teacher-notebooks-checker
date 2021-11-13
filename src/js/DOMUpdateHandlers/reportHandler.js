import appState from "../StateHandler";
import { reportOutput } from "./domElements";
import ReportTitle from "../components/ReportTitle";
import Report from "../components/Report";

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
      this.output.append(ReportTitle(this.filterOption));
    }

    this.output.append(
      ...Report(
        this.reports,
        this.filterType,
        this.bimestersConsidered,
        this.pendingOnly
      )
    );
  }

  clearReport() {
    while (this.output.firstChild)
      this.output.removeChild(this.output.firstChild);
  }
}

const reportHandler = new ReportHandler(appState);

export default reportHandler;
