import { parseDate } from ".";

const january1stCurrentYear = new Date(new Date().getFullYear(), 0, 1).getDay();

/**
 * Gets the weekday as a number from 0 through 6
 * @param {number} day          number of day of the year: 1 ~ 365 (366 if leap year)
 * @param {number} [january1st] weekday of january 1st (0 ~ 6). If not passed, it will be calculated by
 *                              default for the current year
 * @returns {number}            weekday number (0 ~ 6)
 */
const getWeekDay = (day, january1st) => {
  if (isNaN(january1st * 1)) {
    january1st = january1stCurrentYear;
  }
  const weekday = ((day % 7) - 1 + january1st) % 7;
  return weekday > -1 ? weekday : weekday + 7;
};

/**
 * Gets the first day in the desired range that matches the weekday passed
 * @param {number} weekday      target weekday number (0 ~ 6) to be in range
 * @param {number} startingDay  first day number of desired range
 * @param {number} endingDay    last day number of the desired range
 * @param {number} [january1st] weekday of january 1st (0 ~ 6). If not passed, it will be calculated by
 *                              default for the current year
 * @returns {number}            day number, first to match the desired weekday in range. If no day match
 *                              in range -1 is returned
 */
const getFirstDayInRange = (weekday, startingDay, endingDay, january1st) => {
  const startingWeekday = getWeekDay(startingDay, january1st);
  if (startingWeekday == weekday) return startingDay;

  let result = startingDay + weekday - startingWeekday;

  if (result < startingDay) result += 7;

  return result <= endingDay ? result : -1;
};

/**
 * Gets an array of all days in range that match the desired weekday
 * @param {number} weekday      target weekday number (0 ~ 6) to be in range
 * @param {number} startingDay  first day number of desired range
 * @param {number} endingDay    last day number of the desired range
 * @param {number} [january1st] weekday of january 1st (0 ~ 6). If not passed, it will be calculated by
 *                              default for the current year
 * @returns {number[]}          array of days that match the desired weekday
 */
const getDaysInRangeByWeekday = (
  weekday,
  startingDay,
  endingDay,
  january1st
) => {
  const result = [],
    firstDayInRange = getFirstDayInRange(
      weekday,
      startingDay,
      endingDay,
      january1st
    );

  if (firstDayInRange === -1) return result;

  let dayPointer = firstDayInRange;

  while (dayPointer <= endingDay) {
    result.push(dayPointer);
    dayPointer += 7;
  }

  return result;
};

const getDaysCountInRangeByWeekday = (
  weekday,
  startingDay,
  endingDay,
  january1st
) => {
  return getDaysInRangeByWeekday(
    weekday,
    parseDate(startingDay),
    parseDate(endingDay),
    january1st
  ).length;
};

export default getDaysCountInRangeByWeekday;
