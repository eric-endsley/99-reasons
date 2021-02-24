import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {id } = action;
  switch (action.type) {
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