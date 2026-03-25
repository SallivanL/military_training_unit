import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";







export type AppLoadingStatus =
    | "idle"
    | "loading"
    | "finishing"
    | "success";

interface AppState {
    status: AppLoadingStatus;
}

const initialState: AppState = {
    status: "idle",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        startFinishing(state) {
            if (state.status !== "success") {
                state.status = "finishing";
            }
        },
        setSuccess(state) {
            state.status = "success";
        },
        setStatus(state, action: PayloadAction<AppLoadingStatus>) {
            state.status = action.payload;
        },
    },
});

export const { startFinishing, setSuccess, setStatus } = appSlice.actions;
export default appSlice.reducer;
