//What happens if you dispatch an action that doesn’t change the Redux state? Will the component re-render?
import { createStore } from 'redux'
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NOTHING = 'NOTHING';
export const RETURN_OBJECT = 'RETURN_OBJECT';

export const initialState = {
  counter: 1
}

export function increment(params) {
  return {
    type: 'INCREMENT'
  }
}

export function decrement(params) {
  return {
    type: 'DECREMENT'
  }
}
export function nothingAction(params) {
  return {
    type: 'NOTHING'
  }
}
export function returnAction(params) {
  return {
    type: 'RETURN_OBJECT'
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }

    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }

    case 'NOTHING':
      return state;

    case 'RETURN_OBJECT':
      return {
        counter: state.counter
      }

    default:
      return state;
  }
}


export const store = createStore(reducer);
console.log("Initial : ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated: ", store.getState()))
