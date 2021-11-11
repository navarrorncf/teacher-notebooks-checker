import timetables_1s_raw from "../../csv/timetables_1s.txt";
import timetables_2s_raw from "../../csv/timetables_2s.txt";

import { SUBJECT_NAMES_FROM_ABBREVIATIONS } from "./constants";

let timetableStrings = [timetables_1s_raw, timetables_2s_raw];

const timetableStore = {};

// BUILDS timetableStore object with data from both timetable txt files
const parseTimetables = (timetableString, index) => {
  const semester = index + 1;
  const semesterKey = `s${semester}`;
  if (!timetableStore[semesterKey]) timetableStore[semesterKey] = {};

  const currentSemesterStore = timetableStore[semesterKey];

  const lines = timetableString.split("\n");
  const groupStartingIndices = [];

  lines.forEach((line, index) => {
    if (/º /.test(line)) groupStartingIndices.push(index);
  });
  groupStartingIndices.push(lines.length);

  for (let i = 0, len = groupStartingIndices.length - 1; i < len; i++) {
    const [startIndex, endIndex] = [
      groupStartingIndices[i],
      groupStartingIndices[i + 1],
    ];
    const groupTimetable = lines.slice(startIndex, endIndex);

    let [groupName, ...timetable] = groupTimetable;
    groupName = groupName.match(/[0-9]º (.*)/)[1].trim();

    let currentGroupStore = currentSemesterStore[groupName];

    if (!currentGroupStore) {
      currentSemesterStore[groupName] = {};
      currentGroupStore = currentSemesterStore[groupName];
    }

    timetable.forEach((row) => {
      const [, ...classes] = row.split(",");

      classes.forEach((subject, index) => {
        const subjectName = SUBJECT_NAMES_FROM_ABBREVIATIONS[subject];
        if (!currentGroupStore[subjectName])
          currentGroupStore[subjectName] = [];
        currentGroupStore[subjectName].push(index + 1);
      });
    });
  }
};

// Parses each subject array into an object with the frequency of each element of the array
timetableStrings.forEach(parseTimetables);
Object.values(timetableStore).forEach((semester) => {
  Object.values(semester).forEach((group) => {
    Object.entries(group).forEach(([subjectName, classes]) => {
      const temp = {};

      classes.forEach((weekday) => {
        if (!temp[weekday]) temp[weekday] = 1;
        else temp[weekday] = temp[weekday] + 1;
      });

      group[subjectName] = temp;
    });
  });
});

export default timetableStore;
