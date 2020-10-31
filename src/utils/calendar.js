import dayjs from 'dayjs';

export const createCalendar = (month) => {
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex + 1;
      const day = firstDay.add(diffFromFirstDay, 'day');

      return day;
    });
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

export const isSameMonth = (day, month) => {
  const currentMonth = getMonth(month);
  return true;
};
