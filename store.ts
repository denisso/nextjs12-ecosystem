import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducerMode } from "./components/sliceMode";

export function makeStore() {
    return configureStore({
        reducer: { mode: reducerMode },
    });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
