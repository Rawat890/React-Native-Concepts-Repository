import axios from 'axios'

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const initialState = {
  loading: false,
  userData: [],
  error: ''
}

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_FAILED
  }
}
export function fetchUsersSuccess(userData) {
  return {
    type: FETCH_USERS_REQUEST,
    payload: userData
  }
}
export function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}

//thunk
export function getUsersData() {
  return function (dispatch) {
    axios.get('https://jsonplaceholder.typicode.com/users/3').then(response => { return response.data }).then((data) => console.log(data)).catch((error) => console.log(error))

  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state, loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: ''
      }
    case FETCH_USERS_REQUEST:
      return {
        loading: false,
        userData: [],
        error: action.error
      }

    default:
      return state;
  }
}