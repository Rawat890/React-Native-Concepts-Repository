import { applyMiddleware, createStore } from "redux";
import postsReducer from "./reducer.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga.js";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// Remove this line as it's causing the immediate dispatch
// store.dispatch(fetchUsersRequest()); // Remove this line

export default store;
