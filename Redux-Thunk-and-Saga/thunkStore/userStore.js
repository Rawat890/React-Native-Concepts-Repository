import { configureStore } from "@reduxjs/toolkit";
import userSlice, { fetchUsersData } from "../thunkSlices/userSlice.js"; // Make sure the default export is correct

const store = configureStore({
  reducer: {
    user: userSlice, // Correct reference
  }
});

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));

store.dispatch(fetchUsersData()); // Dispatching the fetch
