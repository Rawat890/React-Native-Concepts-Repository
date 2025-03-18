import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: ''
};

// CreateAsyncThunk
export const fetchUsersData = createAsyncThunk('users/fetchData', async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await result.json();
  return data; // Return the actual data (not the entire result object)
});

// Create slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Assign the fetched data here
        state.error = '';
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message; // Assign the error message
      });
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

