import React from 'react';
import dayjs from 'dayjs';
import { Menu, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

export const Navigation = ({ month, setPreviousMonth, setNextMonth }) => {
  const format = 'MMMM YYYY';

  return (
    <div>
      <Menu></Menu>
      <span>Calendar</span>
      <ArrowBackIos onClick={setPreviousMonth}></ArrowBackIos>
      <ArrowForwardIos onClick={setNextMonth}></ArrowForwardIos>
      <span>{dayjs(month).format(format)}</span>
    </div>
  );
};
