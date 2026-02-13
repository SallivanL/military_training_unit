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
            },

            secondary: {
                main: palette.secondary[500],
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
        },

        shape: {borderRadius: 8,},

        spacing:8,

        components,
        typography,
    })
