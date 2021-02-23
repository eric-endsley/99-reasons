import formVisibleReducer from './form-visible-reducer';
import reasonListReducer from './reason-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterReasonList: reasonListReducer
});

export default rootReducer;