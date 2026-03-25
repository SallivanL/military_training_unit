import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {store} from "./store";
import {Provider} from "react-redux";
import {CssBaseline} from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider.tsx";
import {HashRouter} from "react-router-dom";
import './App.css'

createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Provider store={store}>
            <ThemeProvider>
                <CssBaseline/>
                <App />
            </ThemeProvider>
        </Provider>
    </HashRouter>
)
