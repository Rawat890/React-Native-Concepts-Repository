import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { userReducer } from '../Redux-Saga/actions/userActionCreators.js';
import { watchFetchUser } from '../Redux-Saga/sagas/saga.js';

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux Store with the Reducer and apply Middleware
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

// Run the Saga
sagaMiddleware.run(watchFetchUser);

export default store;
