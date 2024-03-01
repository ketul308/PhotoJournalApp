import { createAction, createSlice } from "@reduxjs/toolkit";

export const testAction = createAction<number | string>("testAction")

const commonSlice = createSlice({
    name: "common",
    initialState: {
        data: {}
    },
    reducers: {
        setApiData: ((state, action) => {
            console.log('setApiData == ', action);
            state.data = action.payload
        })
    }

});

export { commonSlice };
export const { setApiData } = commonSlice.actions