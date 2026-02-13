import type { ThemeOptions } from '@mui/material/styles'
import { palette } from './palette'

export const typography: ThemeOptions['typography'] = {
    fontFamily: 'Roboto, sans-serif',

    h1: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.2,
    },
    h2: {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.25,
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
    },
    h4: {
        fontSize: '1.25rem',
        fontWeight: 500,
    },

    body1: {
        fontSize: '1rem',
    },
    body2: {
        fontSize: '0.875rem',
        color: palette.gray[400],
    },

    button: {
        textTransform: 'none',
        fontWeight: 500,
    },
}
