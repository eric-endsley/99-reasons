import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, logic, solution, id } = action;
  switch (action.type) {
  case c.ADD_REASON:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        logic: logic,
        solution: solution,
        id: id
        // timeOpen: timeOpen,
        // formattedWaitTime: formattedWaitTime
      }
    });
  case c.DELETE_REASON:
    const newState = { ...state };
    delete newState[id];
    return newState;
  // case c.UPDATE_TIME:
  //   const updatedReason = Object.assign({}, state[id], {formattedWaitTime});
  //   const updatedState = Object.assign({}, state, {
  //     [id]: updatedReason
  //   });
  //   return updatedState;
  default:
    return state;
  }
};