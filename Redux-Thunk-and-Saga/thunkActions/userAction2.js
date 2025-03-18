import { createAsyncThunk } from "@reduxjs/toolkit"

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

//ACTION CREATORS
function userRequest() {
  return { type: FETCH_USER_REQUEST }
}
function userSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}
function userFailed(error) {
  return { type: FETCH_USER_FAILED, payload: error }
}


//Redux thunk
export const fetchUsersData = createAsyncThunk('users/fetchUsers', () => {

})


//REDUCER FUNCTION
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state, loading: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state, loading: true, users: action.payload
      }
    case FETCH_USER_FAILED:
      return {
        ...state, loading: false, error: action.payload
      }

    default:
      return state;
  }
}