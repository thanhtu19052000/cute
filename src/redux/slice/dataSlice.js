import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        header: { num: 'asdasdasdsad' },
        body: { body: 'body', bede: 'bede' },
        footer: {},
    },
    reducers: {
        setHeader: (state, action) => ({
            ...state, header: action.payload
        }),
        setBody: (state, action) => ({
            ...state, body: action.payload
        }),
        setFooter: (state, action) => ({
            ...state, footer: action.payload
        }),
    },
});
export const { setHeader, setBody, setFooter } = dataSlice.actions;
export const selectData = (state) => state.configType;
export default dataSlice.reducer;