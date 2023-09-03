import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
  name: "demoSlice",
  initialState: {
    header: { num: 'asdasdasdsad' },
    body: { body: 'body', bede: 'bede' },
    footer: {},
  },
  reducers: {
    setHeader: (state, action) => ({
      ...state, header: { [action.payload.name]: action.payload.value }
    }),
    setBody: (state, action) => ({
      ...state, body: action.payload
    }),
    setFooter: (state, action) => ({
      ...state, footer: action.payload
    }),
  },
});
export const { setHeader, setBody, setFooter } = demoSlice.actions;
export const selectDemo = (state) => state.configType;
export default demoSlice.reducer;