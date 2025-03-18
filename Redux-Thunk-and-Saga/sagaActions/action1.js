export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

//ACTION CREATORS
export function userRequest() {
  return ({ type: 'FETCH_USER_REQUEST' })
}
export function userSuccess(users) {
  return ({
    type: 'FETCH_USER_SUCCESS',
    payload: users
  })
}
export function userFailed(error) {
  return ({ type: 'FETCH_USER_FAILED', payload: error })
}



export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_USER_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};