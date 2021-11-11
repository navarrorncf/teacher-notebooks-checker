import { daysPerMonth } from ".";

/**
 * Gets the correspondent number to the given date string
 * @param {{string|number}} day day of the month, like 3 or "03"
 * @param {(string|number)} month month of the year, like 12 or "12"
 * @param {(string|number)} year full year, like 1988 or "1988"
 * @returns day number from 1 through 365 (or 366, if leap year)
 */
const getDayID = (day, month, year) => {
  const daysArray = daysPerMonth(year * 1),
    m = month * 1;
  let ID = day * 1;

  for (let i = 1; i < m; i++) {
    ID += daysArray[i - 1];
  }

  return ID;
};

/**
 * Parses a date string into a number
 * @param {string} dateString date in the format "DD/MM/YYYY"
 * @returns the day as a number from 1 through 356 (or 366 if leap year)
 */
const parseDate = (dateString) => {
  if (typeof dateString === "number") return dateString;

  const dateArr = dateString.split("/");
  if (dateArr.length === 3) {
    let [day, month, year] = dateArr;
    return getDayID(day, month, year);
  } else {
    //   TODO: Error handler
    throw new Error(`Malformed date string`);
  }
};

export default parseDate;
