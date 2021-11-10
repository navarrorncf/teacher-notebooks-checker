import { isLeapYear } from ".";

/**
 * Gets an array with days count for each month for the given year
 * @param {number} year year in YYYY format, defaults to current year
 * @returns             array with number of days for each month that year
 */
const daysPerMonth = (year = new Date().getFullYear()) => {
  const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear(year)) daysPerMonth[1] = 29;

  return daysPerMonth;
};

export default daysPerMonth;
