import reasonListReducer from '../../reducers/reason-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('reasonListReducer', () => {

  let action;

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  const reasonData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(reasonListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new reason data to masterReasonList', () => {
    const { names, location, issue, id } = reasonData;
    action = {
      type: c.ADD_REASON,
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(reasonListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a reason', () => {
    action = {
      type: c.DELETE_REASON,
      id: 1
    };
    expect(reasonListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

});