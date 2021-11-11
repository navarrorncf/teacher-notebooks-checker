import { csvBuilder } from "../utils";
import notebooksRaw from "../../csv/notebooks.txt";
import {
  STUDENT_GROUPS_SHIFTS,
  STUDENT_GROUPS_STARTING_BLOCKS,
  SUBJECT_GROUP_REGEXPS,
} from "./constants";

const csvReports = csvBuilder(notebooksRaw);

const [headers, ...rows] = csvReports.split("\n").map((line) =>
  line.split(",").map((field) => {
    if (/aulas/.test(field)) {
      return {
        isClosed: /ok/.test(field),
        classes: parseInt(field.match(/[0-9]+/)),
      };
    }
    return field;
  })
);

const parseLine = (line) => {
  return line.reduce((acc, cur, index) => {
    const header = headers[index];

    if (header !== "ignore") {
      acc[header] = cur;
    }

    return acc;
  }, {});
};

const verifyTeacherNames = (report) => {
  if (report.teacher.length < 8) report.teacher = "Sem professor";
  return report;
};

const addGroupShift = (report) => {
  if (STUDENT_GROUPS_SHIFTS.nightShift.test(report.group)) {
    report.shift = "nightShift";
  } else if (STUDENT_GROUPS_SHIFTS.dayShift.test(report.group)) {
    report.shift = "dayShift";
  } else {
    console.log(report.group);
    throw new Error("Group shift not found. Check config.js file!");
  }

  return report;
};

const addGroupStartingBlock = (report) => {
  Object.keys(STUDENT_GROUPS_STARTING_BLOCKS).forEach((block) => {
    const regexp = STUDENT_GROUPS_STARTING_BLOCKS[block];
    if (regexp.test(report.group)) {
      report.startingBlock = block;
    }
  });

  if (!report.startingBlock) {
    throw new Error("Group starting block not found. Check config.js file!");
  }

  return report;
};

const removeBimester = (report, bimester) => {
  delete report[bimester];
};

const removeIrrelevantBimesters = (report) => {
  let bimestersToRemove = null;

  if (/eja/.test(report.startingBlock)) {
    const semester = parseInt(report.startingBlock.match(/[12]/));
    bimestersToRemove = semester === 1 ? ["b3", "b4"] : ["b1", "b2"];
  } else {
    const { shift, subject, startingBlock } = report;

    const subjectGroups = SUBJECT_GROUP_REGEXPS[shift];

    if (!subjectGroups.annuals.test(subject)) {
      let subjectGroup;

      Object.keys(subjectGroups)
        .filter((group) => group !== "annuals")
        .forEach((group) => {
          if (subjectGroups[group].test(subject)) {
            subjectGroup = group;
          }
        });

      if (!subjectGroup) {
        throw new Error("Subject block not found. Check config.js file!");
      }

      bimestersToRemove =
        startingBlock === subjectGroup ? ["b3", "b4"] : ["b1", "b2"];
    }
  }

  if (bimestersToRemove) {
    bimestersToRemove.forEach((bimester) => {
      removeBimester(report, bimester);
    });
  }

  return report;
};

const aggregateBimesters = (report) => {
  const bimesters = Object.keys(report).filter((key) => /b[1-4]/.test(key));

  report.bimesters = {};

  bimesters.forEach((bimester) => {
    const bimesterNumber = parseInt(bimester.match(/[1-4]/));
    report.bimesters[bimester] = report[bimester];
    report.bimesters[bimester].bimesterNumber = bimesterNumber;

    removeBimester(report, bimester);
  });

  return report;
};

const REPORTS = rows
  .map(parseLine)
  .map(verifyTeacherNames)
  .map(addGroupShift)
  .map(addGroupStartingBlock)
  .map(removeIrrelevantBimesters)
  .map(aggregateBimesters);

export default REPORTS;
