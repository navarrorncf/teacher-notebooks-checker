import "./styles.css";

const ReportTitle = (title) => {
  const ReportTitle = document.createElement("div");
  ReportTitle.append(title);
  ReportTitle.classList.add("report-title");

  return ReportTitle;
};

export default ReportTitle;
