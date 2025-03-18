import { applyMiddleware, createStore } from 'redux'
import { fetchUsersData, userReducer } from '../thunkActions/userAction1.js'
import { thunk } from 'redux-thunk'


const store = createStore(userReducer, applyMiddleware(thunk))
console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))

store.dispatch(fetchUsersData());

