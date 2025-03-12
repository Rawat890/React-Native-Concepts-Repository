import { applyMiddleware, createStore } from "redux";
import { orderIceCream, restockIceCream, priceIceCream } from "../React-Redux/features/iceCream/iceActions.js";
import { iceCreamReducer } from "../React-Redux/features/iceCream/iceActions.js";
import pkg from 'redux-logger';
import { priceCake } from "../React-Redux/features/cake/cakeAction.js";
const { createLogger } = pkg;
const logger = createLogger();

const store = createStore(iceCreamReducer, applyMiddleware(logger))
console.log("Initial state: ", store.getState())
const unsubscribe = store.subscribe(() => { })

store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(priceIceCream(20))
store.dispatch(restockIceCream(10))
