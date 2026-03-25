import {IconButton, type IconButtonProps} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useContext } from 'react'
import { ThemeContext } from '@/theme/ThemeContext.ts'
import { useTheme } from '@mui/material/styles'

export default function ThemeToggleButton(props: IconButtonProps) {
    const { toggleTheme } = useContext(ThemeContext)
    const theme = useTheme()

    return (
        <IconButton color="inherit" onClick={toggleTheme} {...props}>
            {theme.palette.mode === 'dark'
                ? <LightModeIcon />
                : <DarkModeIcon sx={{color:'#000'}} />}
        </IconButton>
    )
}
