import React from 'react';

import { Menu, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

export const Navigation = ({ setPreviousMonth, setNextMonth }) => {
  return (
    <div>
      <Menu></Menu>
      <span>Calendar</span>
      <ArrowBackIos onClick={setPreviousMonth}></ArrowBackIos>
      <ArrowForwardIos onClick={setNextMonth}></ArrowForwardIos>
    </div>
  );
};
