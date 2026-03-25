import { createTheme } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,

            primary: {
                main: palette.primary[500],
                light: palette.primary[400],
                dark: palette.primary[700],
                contrastText: '#fff',
            },

            secondary: {
                main: palette.secondary[500],
                light: palette.secondary[400],
                dark: palette.secondary[700],
                contrastText: '#fff',
            },

            background: {
                default:
                    mode === 'dark'
                        ? palette.gray[900]
                        : palette.gray[50],

                paper:
                    mode === 'dark'
                        ? palette.gray[800]
                        : '#ffffff',
            },
            text: {
                primary:
                    mode === 'light'
                        ? palette.gray[900]
                        : palette.gray[50],
                secondary:
                    mode === 'light'
                        ? palette.gray[900]
                        : palette.gray[50],
            },
        },

        shape: {borderRadius: 8,},

        spacing:8,

        components,
        typography,
    })
