import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "configTypeText",
  initialState: {
    fontSize:13,
    fontFamily:1
  },
  reducers: {
    setConfig: (state, action) => ({
      ...state,...action.payload,
    }),
  },
});
export const { setConfig } = configSlice.actions;
export const selectConfig = (state) => state.configType;
export default configSlice.reducer;