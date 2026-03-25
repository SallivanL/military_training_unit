import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DeviceState {
    width: number;
    isMobile: boolean;
}

const initialState: DeviceState = {
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    isMobile: typeof window !== "undefined"
        ? window.innerWidth < 600
        : false,
};

const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        setDevice(state, action: PayloadAction<number>) {
            state.width = action.payload;
            state.isMobile = action.payload < 600;
        },
    },
});

export const { setDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
