import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userActions.js";

// Action Creators
export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, user });
export const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, error });

// Initial state for the reducer
export const initialState = {
  loading: false,
  user: null,
  error: null,
};

// Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true }; // Set loading to true when request is made
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.user }; // Update user data and set loading to false
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.error }; // Set error if request fails
    default:
      return state;
  }
};