import { FETCH_USERS_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./action.js";

const initialState = {
  loading: false,
  posts: [], error: ''
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: ''
      }
    case FETCH_USERS_REQUEST:
      return {
        loading: true,
        posts: [],
        error: ''
      }
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        posts: [],
        error: action.error
      }

    default:
      return state;
  }
}

export default postsReducer;