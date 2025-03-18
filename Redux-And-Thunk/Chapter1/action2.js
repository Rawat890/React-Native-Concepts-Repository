//What happens if you dispatch an action that doesn’t change the Redux state? Will the component re-render?
import { createStore } from 'redux'
export const GET_NAME = 'GET_NAME';
export const GET_ADDRESS = 'GET_ADDRESS';
export const NOTHING = 'NOTHING';
export const NEW_OBJECT = 'NEW_OBJECT';
export const RETURN_OBJECT = 'RETURN_OBJECT';

export const initialState = {
  name: 'Rohit',
  address: {
    house: 123,
    mainStreet: 'Model Town'
  }
}

export function getName(params) {
  return {
    type: 'GET_NAME'
  }
}

export function getAddress(params) {
  return {
    type: 'GET_ADDRESS'
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
export function newObject(params) {
  return {
    type: 'NEW_OBJECT'
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NAME':
      return {
        ...state, name: 'Virat'
      }

    case 'GET_ADDRESS':
      { state.address.house = 109 }
    // return { ...state, address: state.address = 90 }

    case 'RETURN_OBJECT':
      return {
        name: state.name,
        address: state.address
      }
    case 'NEW_OBJECT':
      // return {
      //   name: state.name = 'Ramesh',
      //   address: state.address = 'House no22'
      // }

      return { ...state, name: state.name = 'Vishu' };
    // return undefined;

    case 'NOTHING':
      return 

    default:
      return state;
  }
}


export const store = createStore(reducer);
console.log("Initial : ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated: ", store.getState()))
