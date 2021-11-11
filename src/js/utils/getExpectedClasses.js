import timetableStore from "../config/timetables";
import periods from "../config/dates";
import { getSemester } from ".";

const getTimeTable = (subject, group, bimester) => {
  const semesterKey = getSemester(bimester);

  const groupName = Object.keys(timetableStore[semesterKey]).find(
    (groupName) => groupName.toLowerCase() === group.toLowerCase()
  );

  return timetableStore[semesterKey][groupName][subject];
};

const getExpectedClasses = (subject, group, bimester) => {
  const timetable = getTimeTable(subject, group, bimester);
  const { weekdaysCount } = periods.find(({ period }) => period === bimester);
  let result = 0;

  Object.entries(timetable).forEach(([weekday, count]) => {
    result += weekdaysCount[weekday] * count;
  });

  return result;
};

export default getExpectedClasses;
