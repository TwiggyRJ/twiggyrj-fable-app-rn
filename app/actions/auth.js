import { AUTHENICATE_SUCCESS } from './actionTypes';
import FableApi from '../api/FableApi';

export const authenticateSuccess = (auth) => {
  console.log(auth);
  return {
    type: AUTHENICATE_SUCCESS,
    auth
  }
};

//Async Action
export const authenticate = (email, password) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    let auth = FableApi.authenticate(email, password);
    console.log("Loading From API");
    return dispatch(authenticateSuccess(auth));
  };
};
