import React from 'react';
import { Schedule } from '../Schedule/Schedule';
import { Typography, makeStyles } from '@material-ui/core';

import { isFirstDay } from '../../utils/calendar';

const useStyles = makeStyles({
  date: {
    'border-right': '1px solid #ccc',
  },
  schedule: {
    'border-bottom': '1px solid #ccc',
    'border-right': '1px solid #ccc',
    height: '15vh',
  },
});

const createSchedule = (day) => {
  // console.log(`createSchedule on ${day}`);
};

export const CalendarElement = ({ day, month, schedules }) => {
  const format = isFirstDay(day) ? 'MMM D' : 'D';

  const classes = useStyles();

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
