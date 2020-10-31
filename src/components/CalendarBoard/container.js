import { connect } from 'react-redux';

import { CalendarBoard } from './CalenderBoard';
import { createCalendar } from '../../utils/calendar';

const mapStateToProps = (state) => {
  console.log(state.calendar);
  return {
    calendar: state.calendar,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar),
  };
};

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
