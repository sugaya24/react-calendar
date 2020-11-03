import { connect } from 'react-redux';
import { AddScheduleDialog } from './AddScheduleDialog';
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
} from '../../redux/addSchedule/actions';
import { scheduleAddItem } from '../../redux/schedules/actions';

const mapStateToProps = (state) => {
  return {
    schedule: state.addSchedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDialog: () => {
      dispatch(addScheduleCloseDialog());
    },
    setSchedule: (value) => {
      dispatch(addScheduleSetValue(value));
    },
    saveSchedule: (schedule) => {
      dispatch(scheduleAddItem(schedule));
      dispatch(addScheduleCloseDialog());
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule },
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
