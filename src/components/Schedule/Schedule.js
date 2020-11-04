import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { isBeforeToday } from '../../utils/calendar';

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      backgroundColor: (props) =>
        props.isBeforeToday
          ? theme.palette.success.light
          : theme.palette.success.dark,
      padding: theme.spacing(0, 1),
      color: (props) =>
        props.isBeforeToday
          ? theme.palette.text.disabled
          : theme.palette.common.white,
      whiteSpace: 'nowrap',
      margin: theme.spacing(0, 1, 0.2, 0),
    },
  };
});

export const Schedule = ({ schedule }) => {
  const { title, date } = schedule;

  const props = {
    isBeforeToday: isBeforeToday(date),
  };
  const classes = useStyles(props);

  return (
    <div>
      <Paper className={classes.paper} elevation={0}>
        <Typography>{title}</Typography>
      </Paper>
    </div>
  );
};
