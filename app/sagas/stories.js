import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  GET_STORIES,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE
} from "../actions/actions";
import { getAllStories } from "../api/stories";

export function* getStories(action) {
  try {
    const stories = yield getAllStories();
    yield put({ type: GET_STORIES_SUCCESS, stories });
  } catch (e) {
    const stories = e;
    yield put({ type: GET_STORIES_FAILURE, stories });
  }
}

// the 'watcher' - on every 'GET_STORIES' action, run our side effect
export const storiesSagas = [
  takeEvery(GET_STORIES, getStories),
]
