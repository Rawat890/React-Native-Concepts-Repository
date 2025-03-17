
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

export function fetchUsersRequest() {
  return { type: 'FETCH_USERS_REQUEST' }
}
export function fetchUsersSuccess(posts) {
  return { type: 'FETCH_USERS_SUCCESS', payload: posts }
}
export function fetchUsersFailed(error) {
  return { type: 'FETCH_USERS_FAILED', payload: error }
}

