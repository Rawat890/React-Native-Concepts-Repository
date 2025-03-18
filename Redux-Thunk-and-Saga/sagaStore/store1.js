import { applyMiddleware, createStore } from "redux";
import { userReducer, userRequest } from "../sagaActions/action1.js";
import createSagaMiddleware from "redux-saga";
import sagaWatcher from "../sagas/saga1.js";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(userReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagaWatcher)

console.log("Initial State: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))
store.dispatch(userRequest());