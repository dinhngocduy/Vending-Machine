import { ENUM_TIME_FILTER } from "libraries/enums/enum-time-filter";

export const fromDate = (label: string) => {
  switch (label) {
    case ENUM_TIME_FILTER.DAY:
      return timeYesterday();
    case ENUM_TIME_FILTER.WEEK:
      return time1WeekAgo();
    case ENUM_TIME_FILTER.MONTH:
      return time1MonthAgo();
    case ENUM_TIME_FILTER.YEAR:
  }
};

const timeYesterday = () => {
  var yesterday = new Date().getTime() - 24 * 60 * 60 * 1000;
  return new Date(yesterday);
};

const time1WeekAgo = () => {
  const date = new Date();
  var weekAgo =
    date.getTime() -
    7 * 24 * 60 * 60 * 1000 -
    date.getHours() * 60 * 60 * 1000 -
    date.getMinutes() * 60 * 1000 -
    date.getSeconds() * 1000;
  return new Date(weekAgo);
};

const time1MonthAgo = () => {
  const date = new Date();
  var monthAgo =
    date.getTime() -
    30 * 24 * 60 * 60 * 1000 -
    date.getHours() * 60 * 60 * 1000 -
    date.getMinutes() * 60 * 1000 -
    date.getSeconds() * 1000;
  return new Date(monthAgo);
};
