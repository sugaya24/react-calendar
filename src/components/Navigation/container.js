import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { getMonth, getNextMonth, getPreviousMonth } from '../../utils/calendar';
import { calendarSetMonth } from '../../redux/calendar/actions';

export const mapStateToProps = (state) => {
  return {
    calendar: state.calendar,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: (month) => {
      dispatch(calendarSetMonth(month));
    },
  };
};

export const mergeProps = (stateProps, dispatchProps) => {
  return {
    calendar: stateProps.calendar,
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
      const nextMonth = getNextMonth(stateProps.calendar);
      dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
      const previousMonth = getPreviousMonth(stateProps.calendar);
      dispatchProps.setMonth(previousMonth);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
