// Create Redux store with middleware (Redux Thunk)

import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";


// Action Types
const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';

// Initial State
const initialState = {
  loading: false,
  commentsData: [],
  error: ''
}

// Action Creators
function fetchCommentsRequest() {
  return {
    type: FETCH_COMMENTS_REQUEST
  }
}

function fetchCommentsSuccess(data) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: data
  }
}

function fetchCommentsFailed(error) {
  return {
    type: FETCH_COMMENTS_FAILED,
    payload: error
  }
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        commentsData: action.payload,
        error: ''
      }
    case FETCH_COMMENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        commentsData: []
      }
    default:
      return state;
  }
}

// Async Action (Using Thunk)
function fetchCommentsByDummy() {
  return async (dispatch) => {
    // Dispatch request action
    dispatch(fetchCommentsRequest());

    try {
      // Fetch comments from dummy API
      const response = await fetch('https://dummyjson.com/comments/1');
      const data = await response.json();

      // Dispatch success action
      dispatch(fetchCommentsSuccess(data));
    } catch (error) {
      // Dispatch failed action if error occurs
      dispatch(fetchCommentsFailed(error.message));
    }
  }
}


const store = createStore(reducer, applyMiddleware(thunk));

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

// Dispatching the async action to fetch comments
store.dispatch(fetchCommentsByDummy());
