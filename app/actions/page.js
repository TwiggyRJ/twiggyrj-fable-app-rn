import { FETCH_PAGE_SUCCESS } from './actionTypes';
import FableApi from '../api/FableApi';
import Axios from 'axios';

export const fetchPageSuccess = (page) => {
  console.log(page);
  return {
    type: FETCH_PAGE_SUCCESS,
    page
  }
};

//Async Action
export const fetchPage = (story, page) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    let page = FableApi.getPage(story, page);
    console.log("Loading From API");
    return dispatch(fetchPageSuccess(page));
  };
};
