import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USERS_REQUEST, fetchUsersFailed, fetchUsersSuccess } from "./action.js";


async function getPosts() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await result.json();
    return res;
  } catch (error) {
    throw new Error('Cannot fetch data -> ', error.message)
  }
}

function* sagaWorker() {
  try {
    const result = yield call(getPosts);
    yield put(fetchUsersSuccess(result))
  } catch (error) {
    yield put(fetchUsersFailed(error))
  }
}

function* watcherSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, sagaWorker)
}


export default watcherSaga;