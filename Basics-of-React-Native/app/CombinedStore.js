import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { cakeReducer, orderCake, priceCake } from '../React-Redux/features/cake/cakeAction.js'
import { iceCreamReducer, orderIceCream, priceIceCream } from '../React-Redux/features/iceCream/iceActions.js'
import { userReducer, getUsersData } from '../React-Redux/features/user/userActions.js'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
console.log("Initial state: ", store.getState())
const subscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))

store.dispatch(orderCake())
store.dispatch(getUsersData())
store.dispatch(orderIceCream())
store.dispatch(priceCake(140))
store.dispatch(priceIceCream(20))