import { IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider'
import { useTheme } from '@mui/material/styles'

export default function ThemeToggleButton() {
    const { toggleTheme } = useContext(ThemeContext)
    const theme = useTheme()

    return (
        <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    )
}
