// userSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch users
export const fetchUsersData = createAsyncThunk('users/fetchUsersData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
});

// Initial state for users
const initialState = {
  loading: false,
  users: [],
  error: null,
};

// Create the slice
const userSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsersData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
