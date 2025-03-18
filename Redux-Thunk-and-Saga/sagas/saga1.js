import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, userFailed, userRequest, userSuccess } from '../sagaActions/action1.js'
//Fetch user Data
async function fetchUsersData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message
  }
}


//Worker saga function
function* userSagaFunction() {
  // yield put(userRequest())
  try {
    const data = yield call(fetchUsersData)
    yield put(userSuccess(data))
  } catch (error) {
    yield put(userFailed(error))
  }
}

//WatcherFunction
function* sagaWatcher() {
  yield takeEvery(FETCH_USER_REQUEST, userSagaFunction)
}

export default sagaWatcher;