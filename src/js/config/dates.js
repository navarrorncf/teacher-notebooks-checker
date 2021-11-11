import { parseDate, getDaysCountInRangeByWeekday } from "../utils/dates";

const parseDayIDs = ({ date, weekday }) => ({ date: parseDate(date), weekday });

const datesToAdd = [
  {
    date: "13/03/2021",
    weekday: 1,
  },
  {
    date: "27/03/2021",
    weekday: 2,
  },
  {
    date: "10/04/2021",
    weekday: 3,
  },
  {
    date: "24/04/2021",
    weekday: 4,
  },
  {
    date: "08/05/2021",
    weekday: 5,
  },
  {
    date: "29/05/2021",
    weekday: 1,
  },
  {
    date: "19/06/2021",
    weekday: 2,
  },
  {
    date: "10/07/2021",
    weekday: 3,
  },
  {
    date: "25/09/2021",
    weekday: 1,
  },
  {
    date: "23/10/2021",
    weekday: 4,
  },
  {
    date: "06/11/2021",
    weekday: 5,
  },
  {
    date: "20/11/2021",
    weekday: 1,
  },
  {
    date: "04/12/2021",
    weekday: 1,
  },
  {
    date: "18/12/2021",
    weekday: 1,
  },
].map(parseDayIDs);

const datesToRemove = [
  { date: "02/04/2021", weekday: 5 },
  { date: "21/04/2021", weekday: 3 },
  { date: "03/06/2021", weekday: 4 },
  { date: "06/09/2021", weekday: 1 },
  { date: "07/09/2021", weekday: 2 },
  { date: "11/10/2021", weekday: 1 },
  { date: "12/10/2021", weekday: 2 },
  { date: "01/11/2021", weekday: 1 },
  { date: "02/11/2021", weekday: 2 },
  { date: "15/11/2021", weekday: 1 },
  { date: "29/11/2021", weekday: 1 },
  { date: "30/11/2021", weekday: 2 },
].map(parseDayIDs);

const periods = [
  {
    period: 1,
    startingDate: "08/03/2021",
    endingDate: "11/05/2021",
  },
  {
    period: 2,
    startingDate: "12/05/2021",
    endingDate: "16/07/2021",
  },
  {
    period: 3,
    startingDate: "02/08/2021",
    endingDate: "13/10/2021",
  },
  {
    period: 4,
    startingDate: "14/10/2021",
    endingDate: "22/12/2021",
  },
].map((period) => {
  const { startingDate, endingDate } = period;

  const [startingID, endingID] = [startingDate, endingDate].map(parseDate);

  const weekdaysCount = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  const datesToAddInCurrentPeriod = datesToAdd.filter(
    ({ date }) => (date >= startingID) & (date <= endingID)
  );

  const datesToRemoveInCurrentPeriod = datesToRemove.filter(
    ({ date }) => (date >= startingID) & (date <= endingID)
  );

  for (let i = 0; i <= 6; i++) {
    const datesToAddInCurrentWeekday = datesToAddInCurrentPeriod.filter(
      ({ weekday }) => weekday === i
    );

    const datesToRemoveInCurrentWeekday = datesToRemoveInCurrentPeriod.filter(
      ({ weekday }) => weekday === i
    );

    weekdaysCount[i] =
      getDaysCountInRangeByWeekday(i, startingID, endingID) +
      datesToAddInCurrentWeekday.length -
      datesToRemoveInCurrentWeekday.length;
  }

  return { ...period, weekdaysCount };
});

export default periods;
