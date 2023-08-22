import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
  name: "configTypeText",
  initialState: {
    header:[],
    body:[],
    footer:[],
  },
  reducers: {
    setHeader: (state, action) => ({
        ...state,header:action.payload
    }),
      setBody: (state, action) => ({
        ...state,body:action.payload
    }),
    setFooter: (state, action) => ({
      ...state,footer:action.payload
  }),
  },
});
export const { setHeader,setBody,setFooter } = demoSlice.actions;
export const selectDemo = (state) => state.configType;
export default demoSlice.reducer;