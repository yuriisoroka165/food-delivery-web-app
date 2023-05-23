import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        filterItems(state, action) {
            return action.payload;
        },
    },
});

export const { filterItems } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
