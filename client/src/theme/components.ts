import type { Components } from '@mui/material/styles'

export const components: Components = {
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
                borderRadius: 10,
                fontWeight: 500,
            },
        },
    },
}
