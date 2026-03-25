import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const HeroSection = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(10, 2, 8),
    textAlign: "center",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(32px,5vw,52px)",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
}));

export const HeroSubtitle = styled(Typography)({
    maxWidth: 700,
    margin: "0 auto",
    opacity: 0.85,
});

/* Toggle */

export const ToggleWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
}));

export const ToggleContainer = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    background: alpha(theme.palette.primary.main, 0.08),
    borderRadius: theme.shape.borderRadius,
    padding: 4,
}));

interface ToggleProps {
    active?: boolean
}

export const ToggleButton = styled(Button, {
    shouldForwardProp: prop => prop !== "active"
})<ToggleProps>(({ theme, active }) => ({

    textTransform: "none",
    padding: "8px 20px",
    fontWeight: 600,
    borderRadius: theme.shape.borderRadius,

    color: active
        ? theme.palette.common.white
        : theme.palette.text.secondary,

    background: active
        ? theme.palette.primary.main
        : "transparent",

    "&:hover": {
        background: active
            ? theme.palette.primary.dark
            : alpha(theme.palette.primary.main, 0.15)
    }
}));