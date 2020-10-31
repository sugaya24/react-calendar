import { connect } from 'react-redux';

import { CalendarBoard } from './CalenderBoard';
import { createCalendar } from '../../utils/calendar';

const mapStateToProps = (state) => ({
  calendar: state.calendar,
});

const mergeProps = (stateProps) => ({
  calendar: createCalendar(stateProps.calendar),
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
