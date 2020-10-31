import React from 'react';
import { GridList, Typography, makeStyles } from '@material-ui/core';
import { CalendarElement } from '../CalendarElement/CalenderElement';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const useStyles = makeStyles({
  container: {
    height: '90vh',
  },
  grid: {
    'border-top': '1px solid #ccc',
    'border-left': '1px solid #ccc',
  },
  days: {
    'border-right': '1px solid #ccc',
    color: '#aaa',
  },
});

export const CalendarBoard = ({ calendar, month }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridList className={classes.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography className={classes.days} align="center" component="div">
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map((c) => {
          return (
            <li key={c.toISOString()}>
              <CalendarElement day={c} month={month} />
            </li>
          );
        })}
      </GridList>
    </div>
  );
};
