import { getUniqueValues } from "../utils";
import REPORTS from "./notebooksParser";

const pluckTeacherName = ({ teacher }) => teacher;
const TEACHERS = getUniqueValues(REPORTS.map(pluckTeacherName));

export default TEACHERS;
