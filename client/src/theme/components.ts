import type { Components, Theme } from '@mui/material/styles'

export const components: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: (theme) => ({
            html: {
                height: "100%",
            },
            body: {
                minHeight: "100%",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                transition: "background-color 0.3s ease",
            },
            "#root": {
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
            },
        }),
    },
}
