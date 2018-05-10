import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  GET_STORY,
  GET_STORY_SUCCESS,
  GET_STORY_FAILURE
} from "../actions/actions";
import { getAllStories } from "../api/stories";

export function* getStories(action) {
  try {
    const story = action.data
    yield put({ type: GET_STORY_SUCCESS, stories });
  } catch (e) {
    const stories = e;
    yield put({ type: GET_STORY_FAILURE, stories });
  }
}

// the 'watcher' - on every 'GET_STORY' action, run our side effect
export const storySagas = [
  takeEvery(GET_STORY, getStory),
]
