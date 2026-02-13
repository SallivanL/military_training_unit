import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AppLoadingStatus =
    | "loading"
    | "finishing"
    | "success";

interface AppState {
    status: AppLoadingStatus;
}

const initialState: AppState = {
    status: "loading",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        startFinishing(state) {
            state.status = "finishing";
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
