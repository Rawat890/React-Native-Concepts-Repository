import { createStore } from 'redux'
import { orderCake, priceCake, restockCake } from '../React-Redux/features/cake/cakeAction.js'
import { cakeReducer } from '../React-Redux/features/cake/cakeAction.js'

import { CAKE_PRICE, CAKE_ORDERED, CAKE_RESTOCKED } from '../React-Redux/features/cake/cakeAction.js'

const store = createStore(cakeReducer)
console.log("Initial State: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(10))
store.dispatch(priceCake(250))
store.dispatch(orderCake())