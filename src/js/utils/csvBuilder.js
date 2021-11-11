const replaceTabsWithCommas = (string) => string.replace(/\t/g, ",");

const removeDuplicatedSpaces = (string) => string.replace(/\s{2,}/g, " ");

const trimSpaces = (string) =>
  string
    .replace(/\s*,\s*/g, ",")
    .replace(/^\s+/, "")
    .replace(/\s+$/, "");

const isHeaderRow = (string) => /1º Bimestre/.test(string);

const isFinalRow = (string) => /TOTAIS/.test(string);

const headersRow = () => "group,subject,code,teacher,b1,b2,ignore,b3,b4,ignore";

const splitLines = (string) => string.split("\n");

const getHeadersIndex = (lines) => lines.findIndex((line) => isHeaderRow(line));

const getFinalRowIndex = (lines) => lines.findIndex((line) => isFinalRow(line));

const csvRows = (lines) =>
  lines.slice(getHeadersIndex(lines) + 1, getFinalRowIndex(lines));

const csvTable = (lines) => [headersRow(), ...csvRows(lines)];

const csvBuilder = (notebooksTableString) => {
  const lines = splitLines(notebooksTableString);

  return csvTable(lines)
    .map(replaceTabsWithCommas)
    .map(trimSpaces)
    .map(removeDuplicatedSpaces)
    .join("\n");
};

export default csvBuilder;
