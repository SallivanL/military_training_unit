import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./AppSlice.ts";
import deviceReducer from "./DeviceSlice";
import animationReducer from "./AnimationSlice.ts";

export const store = configureStore({
    reducer: {
        app: appReducer,
        device: deviceReducer,
        animation: animationReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch