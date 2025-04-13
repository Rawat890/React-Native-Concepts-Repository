import { createStore } from "redux";

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_PRICE = 'CAKE_PRICE';

const initialState = {
  numberOfCakes: 20,
  price: 0
}

function cakeOrdered() {
  return {
    type: 'CAKE_ORDERED'
  }
}
function cakePrice(price = 0) {
  return {
    type: 'CAKE_PRICE',
    payload: price
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAKE_ORDERED':
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    case 'CAKE_PRICE':
      return { ...state, price: state.price + action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("Initial state: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakePrice(150))
store.dispatch(cakePrice(250))

