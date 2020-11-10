import dayjs from 'dayjs';
import { SCHEDULE_ADD_ITEM } from './actions';

const init = {
  items: [
    {
      title: 'Happy Birthday🎂',
      description: '',
      date: dayjs(),
      location: '',
    },
    {
      title: 'Meeting',
      description: '',
      date: dayjs().add(14, 'day'),
      location: '',
    },
    {
      title: 'Interview',
      description: '',
      date: dayjs().add(4, 'day'),
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
