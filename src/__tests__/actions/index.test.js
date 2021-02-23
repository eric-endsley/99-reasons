import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {
  it('addReason should create ADD_REASON action', () => {
    expect(actions.addReason({names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working!', timeOpen: 0,
    formattedWaitTime: "A few seconds", id: 1})).toEqual({
      type: c.ADD_REASON,
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: "A few seconds",
      id: 1
    });
  });

  it('deleteReason should create DELETE_REASON action', () => {
    expect(actions.deleteReason(1)).toEqual({
      type: c.DELETE_REASON,
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "time")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "time"
    });
  });
});