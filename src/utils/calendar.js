import dayjs from 'dayjs';

export const createCalendar = (month) => {
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();

  if (isStartFromSunday(firstDayIndex)) {
    return Array(42)
      .fill(0)
      .map((_, i) => {
        const diffFromFirstDay = i - firstDayIndex - 6;
        const day = firstDay.add(diffFromFirstDay, 'day');

        return day;
      });
  } else {
    return Array(35)
      .fill(0)
      .map((_, i) => {
        const diffFromFirstDay = i - firstDayIndex + 1;
        const day = firstDay.add(diffFromFirstDay, 'day');

        return day;
      });
  }
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

export const isSameDay = (d1, d2) => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = 'YYYYMM';
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, 'month');
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, 'month');
  return formatMonth(day);
};

export const isStartFromSunday = (index) => {
  return index === 0 ? true : false;
};

export const isBeforeToday = (day) => {
  return dayjs().add(-1, 'day').isAfter(day);
};
