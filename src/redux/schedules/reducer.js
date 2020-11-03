import dayjs from 'dayjs';
import { SCHEDULE_ADD_ITEM } from './actions';

const init = {
  items: [
    {
      title: 'hello',
      description: '',
      date: dayjs(),
      location: '',
    },
  ],
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULE_ADD_ITEM:
      return { ...state, items: [...state.items, payload] };
    default:
      return state;
  }
};

export default schedulesReducer;
