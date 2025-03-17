import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

// ACTION TYPES
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// INITIAL STATE
const initialState = {
  loading: false,
  posts: [],
  error: ''
};

// ACTION CREATORS
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  };
}

function fetchUsersSuccess(posts) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: posts,
  };
}

function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
}

// API call function
async function getPosts() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const res = await result.json();
    return res;
  } catch (error) {
    throw error;
  }
}

// Saga function to handle the API call
function* fetchPostsSaga() {
  try {
    console.log('Fetching posts...');
    const result = yield call(getPosts);
    yield put(fetchUsersSuccess(result));
  } catch (error) {
    yield put(fetchUsersFailed(error.message));
  }
}

// Watcher function to listen for FETCH_USERS_REQUEST action
function* watcher() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchPostsSaga);
}

// Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false, posts: action.payload, error: ''
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false, posts: [], error: action.payload
      };
    default:
      return state;
  }
};

// Set up saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with saga middleware
const store = createStore(postReducer, applyMiddleware(sagaMiddleware));

// Run the watcher saga
sagaMiddleware.run(watcher);

store.dispatch(fetchUsersRequest());

store.subscribe(() => {
  const state = store.getState();
  // console.log('Current state:', state);

  // Optionally, log posts when they are loaded
  console.log('\nFetched post title:', state.posts.title);
  console.log('\nFetched post body:', state.posts.body);
  console.log('\nFetched post body:', state.posts);


  if (state.error) {
    console.error('Error fetching posts:', state.error);
  }
});
