import { createStore } from "redux"
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const initialState = {
  counter: 0
}

export function incrementCounter() {
  return {
    type: 'INCREMENT'
  }
}
export function decrementCounter() {
  return {
    type: 'DECREMENT'
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state, counter: state.counter - 1
      }

    default:
      return state;
  }
}

export const store = createStore(reducer);
console.log("Initial state: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())