import { createStore } from 'redux'
import { getUsersData, reducer } from '../React-Redux/features/user/userActions.js'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

const userStore = createStore(reducer, applyMiddleware(thunk))
console.log("Initial State: ", userStore.getState())

const unsubscribe = userStore.subscribe(() => console.log("Updated state-", userStore.getState()))


userStore.dispatch(getUsersData())