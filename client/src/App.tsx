import AppRouter from "./router/AppRouter";
import AppLoader from "@/components/AppLoader/AppLoader";
import { useAppSelector } from "@/store/hooks";

function App() {
    const status = useAppSelector(state => state.app.status);

    return (
        <>
            {status !== "success" && <AppLoader />}
            <AppRouter />
        </>
    );
}

export default App;
