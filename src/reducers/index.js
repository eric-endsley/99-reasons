import formVisibleReducer from './form-visible-reducer';
import reasonListReducer from './reason-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterReasonList: reasonListReducer,
  firestore: firestoreReducer
});

export default rootReducer;