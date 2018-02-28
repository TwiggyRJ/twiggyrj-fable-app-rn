import { all } from "redux-saga/effects";
import { storiesSagas } from "./stories";

export default function* rootSaga() {
  yield all([
    ...storiesSagas,
  ])
}
