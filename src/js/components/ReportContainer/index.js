import { getEmptyDiv } from "../../utils/htmlGenerator";

const ReportContainer = () => {
  const container = getEmptyDiv(["report-container"]);
  container.id = "report-container";

  return container;
};

export default ReportContainer;
