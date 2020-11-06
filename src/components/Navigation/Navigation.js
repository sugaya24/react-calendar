import React from 'react';
import dayjs from 'dayjs';
import { Menu, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Toolbar, Typography, withStyles, IconButton } from '@material-ui/core';

const StyledToolbar = withStyles({
  root: {
    padding: 0,
  },
})(Toolbar);

const StyledTypography = withStyles({
  root: {
    margin: '0 20px 0 10px',
  },
})(Typography);

export const Navigation = ({ month, setPreviousMonth, setNextMonth }) => {
  const format = 'MMMM YYYY';

  return (
    <StyledToolbar>
      <IconButton>
        <Menu />
      </IconButton>
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        Calendar
      </StyledTypography>
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
      <Typography color="textPrimary" variant="h5" component="span">
        {dayjs(month).format(format)}
      </Typography>
    </StyledToolbar>
  );
};
