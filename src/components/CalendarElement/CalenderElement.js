import React from 'react';
import { Schedule } from '../Schedule/Schedule';
import { Typography, makeStyles } from '@material-ui/core';

import { isFirstDay, getMonth, isSameMonth } from '../../utils/calendar';

const useStyles = makeStyles({
  date: {
    'border-right': '1px solid #ccc',
    color: (props) => props.color,
  },
  schedule: {
    'border-bottom': '1px solid #ccc',
    'border-right': '1px solid #ccc',
    height: (props) => props.cellHeight,
    'overflow-y': 'scroll',
  },
});

const createSchedule = (day) => {
  // console.log(`createSchedule on ${day}`);
};

export const CalendarElement = ({ day, month, schedules, calendar }) => {
  const format = isFirstDay(day) ? 'MMM D' : 'D';

  const props = {
    cellHeight: calendar.length <= 35 ? '15vh' : '12vh',
    color: isSameMonth(day, getMonth(month)) ? '#000' : '#ccc',
  };
  const classes = useStyles(props);

  return (
    <div onClick={() => createSchedule(day)}>
      <Typography className={classes.date} align="center">
        {day.format(format)}
      </Typography>
      <div className={classes.schedule}>
        {schedules.map((item) => {
          return <Schedule key={item} schedule={item}></Schedule>;
        })}
      </div>
    </div>
  );
};
