import { createStore } from "redux";

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_PRICE = 'ICECREAM_PRICE';

const initialState = {
  numberOfIceCreams: 20,
  price: 0
}

function IceCreamOrdered() {
  return {
    type: 'ICECREAM_ORDERED'
  }
}
function IceCreamPrice(price = 0) {
  return {
    type: 'ICECREAM_PRICE',
    payload: price
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ICECREAM_ORDERED':
      return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
    case 'ICECREAM_PRICE':
      return { ...state, price: state.price + action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("Initial state: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));
store.dispatch(IceCreamOrdered())
store.dispatch(IceCreamOrdered())
store.dispatch(IceCreamOrdered())
store.dispatch(IceCreamPrice(150))
store.dispatch(IceCreamPrice(250))

