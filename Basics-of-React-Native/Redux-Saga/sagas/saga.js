import { FETCH_USER_REQUEST } from "../actions/userActions.js";
import call from 'redux-saga'
import put from 'redux-saga'
import takeEvery from 'redux-saga'
export function* fetchUserSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/1');
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

// Watcher Saga to listen for FETCH_USER_REQUEST action
export function* watchFetchUser() {
  // 'takeEvery' listens for each FETCH_USER_REQUEST action and triggers fetchUserSaga
  yield takeEvery(FETCH_USER_REQUEST, fetchUserSaga);
}