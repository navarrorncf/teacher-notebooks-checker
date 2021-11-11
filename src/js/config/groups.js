import REPORTS from "./notebooksParser";
import { getUniqueValues } from "../utils";

const pluckGroupName = ({ group }) => group;

const GROUPS = getUniqueValues(REPORTS.map(pluckGroupName));

export default GROUPS;
