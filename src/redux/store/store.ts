import { configureStore } from "@reduxjs/toolkit";
import { commonSlice } from "../slices/commonSlice";

const store = configureStore({
    reducer: {
        common: commonSlice.reducer
    }
});

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
