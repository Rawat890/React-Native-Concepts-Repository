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
  return ({ type: 'FETCH_USER_REQUEST' })
}
function userSuccess(users) {
  return ({
    type: 'FETCH_USER_SUCCESS',
    payload: users
  })
}
function userFailed(error) {
  return ({ type: 'FETCH_USER_FAILED', payload: error })
}


//Redux thunk
export const fetchUsersData = () => {

  return async (dispatch) => {
    dispatch(userRequest());
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await result.json();
      dispatch(userSuccess(data))
    } catch (error) {
      dispatch(userFailed(error))
    }
  }
}


//REDUCER FUNCTION
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state, loading: true,
      }
    case 'FETCH_USER_SUCCESS':
      return {
        loading: false, users: action.payload, error: ''
      }
    case 'FETCH_USER_FAILED':
      return {
        loading: false, users: [], error: action.error
      }

    default:
      return state;
  }
}