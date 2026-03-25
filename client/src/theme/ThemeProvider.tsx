import { useMemo, useState, type ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        setMode(prev => (prev === "dark" ? "light" : "dark"));
    };

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}