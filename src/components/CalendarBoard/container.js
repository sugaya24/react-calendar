import { connect } from 'react-redux';

import { CalendarBoard } from './CalenderBoard';
import { createCalendar } from '../../utils/calendar';
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from '../../redux/addSchedule/actions';

import { setSchedules } from '../../utils/schedule';

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar,
    schedules: state.schedules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openAddScheduleDialog: (d) => {
      dispatch(addScheduleOpenDialog());
      dispatch(addScheduleSetValue({ date: d }));
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
