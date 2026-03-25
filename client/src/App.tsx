import AppRouter from "./router/AppRouter";
import AppLoader from "@/components/AppLoader/AppLoader";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setDevice} from "@/store/DeviceSlice.ts";
import {useEffect} from "react";

function App() {

    const status = useAppSelector(state => state.app.status);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('useEffectWidth')
        const updateDevice = () => {
            dispatch(setDevice(window.innerWidth));
        };

        updateDevice(); // первый заход

        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateDevice);
    }, [dispatch]);

    return (
        <>
            {status !== "success" && <AppLoader />}
            <AppRouter />
        </>
    );
}

export default App;
