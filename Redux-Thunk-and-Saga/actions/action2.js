import { createStore } from "redux"

export const GET_NAME = 'GET_NAME'
export const GET_AGE = 'GET_AGE'
export const GET_DEGREE = 'GET_DEGREE'

const initialState = {
  name: 'Rohit Kumar',
  age: 26,
  degree: 'MCA'
}
export function getName(params) {
  return {
    type: 'GET_NAME'
  }
}
export function getAge(params) {
  return {
    type: 'GET_AGE'
  }
}
export function getDegree(params) {
  return {
    type: 'GET_DEGREE'
  }
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NAME':
      return {
        ...state, name: state.name
      }
    case 'GET_AGE':
      return {
        ...state
        , age: state.age
      }
    case 'GET_DEGREE':
      return {
        ...state, degree: state.degree
      }

    default:
      return state;
  }
}

export const store = createStore(reducer);
console.log("Initial: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))

store.dispatch(getName())
store.dispatch(getAge())
store.dispatch(getDegree())