export const SCHEDULE_ADD_ITEM = 'SCHEDULE_ADD_ITEM';

export const scheduleAddItem = (payload) => {
  console.log('payload', payload);
  return {
    type: SCHEDULE_ADD_ITEM,
    payload,
  };
};
