/**
 * Checks if a given year is a leap year
 * @param {number} year full year number YYYY, defaults to current year
 * @returns {boolean}   whether the given year is a leap year
 */
const isLeapYear = (year = new Date().getFullYear()) =>
  year > 0 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));

export default isLeapYear;
