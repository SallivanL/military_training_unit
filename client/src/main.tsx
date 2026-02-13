import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {store} from "./store";
import {Provider} from "react-redux";
import {CssBaseline} from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider.tsx";
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider>
                <CssBaseline/>
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
)
