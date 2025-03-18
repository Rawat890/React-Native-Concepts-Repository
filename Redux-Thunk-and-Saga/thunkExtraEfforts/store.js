// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";  // Import your userSlice

const store = configureStore({
  reducer: {
    usersData: userSlice, // Ensure this matches the slice name in your userSlice.js
  },
});

export default store;
