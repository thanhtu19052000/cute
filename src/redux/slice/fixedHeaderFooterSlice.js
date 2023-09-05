import { createSlice } from "@reduxjs/toolkit";

const fixedHeaderFooter = createSlice({
    name: "fixedHeaderFooter",
    initialState: {

    },
    reducers: {
        setFixedHeaderFooterData: (state, action) => ({
            ...action.payload,
        }),
    },
});
export const { setFixedHeaderFooterData } = fixedHeaderFooter.actions;
export const selectDataFixedHeaderFooterData = (state) => state.configType;
export default fixedHeaderFooter.reducer;