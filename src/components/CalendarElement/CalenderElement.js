import React from 'react';
import { Schedule } from '../Schedule/Schedule';
import { Typography, makeStyles } from '@material-ui/core';

import dayjs from 'dayjs';
import {
  isFirstDay,
  getMonth,
  isSameMonth,
  isSameDay,
} from '../../utils/calendar';

const useStyles = makeStyles({
  date: {
    'border-right': '1px solid #ccc',
    color: (props) => props.color,
    lineHeight: '20px',
    paddingTop: '6px',
    paddingBottom: '6px',
  },
  today: {
    background: '#1a73e8',
    borderRadius: '50%',
    height: '20px',
    minWidth: '20px',
    display: 'inline-block',
    color: '#fff',
  },
  schedule: {
    'border-bottom': '1px solid #ccc',
    'border-right': '1px solid #ccc',
    height: (props) => props.cellHeight,
    'overflow-y': 'scroll',
  },
});

export const CalendarElement = ({ day, month, schedules, calendar }) => {
  const format = isFirstDay(day) ? 'MMM D' : 'D';

  const today = dayjs();
  const isToday = isSameDay(day, today);

  const props = {
    cellHeight: calendar.length <= 35 ? '13vh' : '10vh',
    color: isSameMonth(day, getMonth(month)) ? '#000' : '#ccc',
  };
  const classes = useStyles(props);

  return (
    <div>
      <Typography className={classes.date} align="center">
        <span className={isToday ? classes.today : ''}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={classes.schedule}>
        {schedules.map((item) => {
          return <Schedule key={item} schedule={item}></Schedule>;
        })}
      </div>
    </div>
  );
};
