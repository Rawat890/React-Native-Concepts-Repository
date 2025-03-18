import { reducer } from "./action";
import { createStore } from "redux";

export const store = createStore(reducer);
console.log("Initial state: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()))