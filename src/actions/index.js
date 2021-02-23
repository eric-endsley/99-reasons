import * as c from './ActionTypes';

export const deleteReason = id => ({
  type: c.DELETE_REASON,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addReason = (reason) => {
  const { name, logic, solution, id } = reason;
  return {
    type: c.ADD_REASON,
    name,
    logic,
    solution,
    id: id,
    // formattedWaitTime,
    // timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});