import REPORTS from "./notebooksParser";
import { getUniqueValues } from "../utils";

const pluckSubjectName = ({ subject }) => subject;
const SUBJECTS = getUniqueValues(REPORTS.map(pluckSubjectName));

export default SUBJECTS;
