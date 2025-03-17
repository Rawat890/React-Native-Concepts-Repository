import { all } from 'redux-saga/effects';
import watcherSaga from "./saga.js";


function* rootSaga() {
  yield all([
    watcherSaga()
  ])
}

export default rootSaga;