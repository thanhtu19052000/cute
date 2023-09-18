import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
    name: "action",
    initialState: {
        genFile: false,
    },
    reducers: {
        setAction: (state, action) => ({
            ...action.payload,
        }),
    },
});
export const { setAction } = actionSlice.actions;
export const selectAction = (state) => state.configType;
export default actionSlice.reducer;