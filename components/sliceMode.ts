import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "mode",
    initialState: { current: "light" },
    reducers: {
        switchMode: (state: any) => {
            return  { current: state.current === "light" ? "dark" : "light" };
        },
    },
});

export const reducerMode = slice.reducer;

export const selectMode = (state: any) => {
    return state.mode.current;
};

export const { switchMode } = slice.actions;
