import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name:'tudt'
  },
  reducers: {
    setAuth: (state, action) => ({
      ...action.payload,
    }),
  },
});
export const { setAuth } = authSlice.actions;
export const selectAuth = (state) => state.configType;
export default authSlice.reducer;