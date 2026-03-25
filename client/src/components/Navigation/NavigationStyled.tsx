import { styled, alpha } from "@mui/material/styles";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Typography,
} from "@mui/material";

interface LinkProps {
    active?: boolean;
}

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ToolbarStyled = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    minHeight: 64,
});

export const LogoWrapper = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 700,
    fontSize: 20,
    color: theme.palette.primary.main,
}));

export const NavLinksDesktop = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: theme.spacing(1),

    [theme.breakpoints.up("lg")]: {
        display: "flex",
    },
}));

export const NavLinkItem = styled(Button, {
    shouldForwardProp: (prop) => prop !== "active",
})<LinkProps>(({ theme, active }) => ({
    textTransform: "none",
    borderRadius: theme.shape.borderRadius,
    padding: "6px 12px",
    fontWeight: 500,
    minWidth: "auto",

    color: active
        ? theme.palette.primary.main
        : alpha(theme.palette.text.primary, 0.7),

    background: active
        ? alpha(theme.palette.primary.main, 0.1)
        : "transparent",

    "&:hover": {
        background: alpha(theme.palette.primary.main, 0.05),
        color: theme.palette.primary.main,
    },
}));

export const AdmissionButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    textTransform: "none",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey["200"]
            : theme.palette.primary.contrastText,
    background: theme.palette.secondary.light,

    "&:hover": {
        background: alpha(theme.palette.secondary.light, 0.6),
    },

    [theme.breakpoints.up("lg")]: {
        display: "inline-flex",
        width: "auto",
    },
}));


export const MobileToggle = styled(IconButton)(({ theme }) => ({
    display: "flex",

    [theme.breakpoints.up("lg")]: {
        display: "none",
    },
}));

/* Drawer content */

export const DrawerContent = styled(Box)(({ theme }) => ({
    width: "100%",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    background: "transparent",
}));


export const DrawerLink = styled(Button, {
    shouldForwardProp: (prop) => prop !== "active",
})<LinkProps>(({ theme, active }) => ({
    justifyContent: "flex-start",
    textTransform: "none",
    borderRadius: theme.shape.borderRadius,
    padding: "14px 16px",
    fontWeight: 500,
    width: "100%",
    minWidth: 0,

    color: active
        ? theme.palette.primary.main
        : alpha(theme.palette.text.primary, 0.8),

    background: active
        ? alpha(theme.palette.primary.main, 0.12)
        : "transparent",

    transition: 'transform 0.8s',

    "&:hover": {
        transform: 'translateX(4px)',
        transition: 'transform 0.8s',
        background: alpha(theme.palette.action.hover, 0.04),
    },
}));

export const DesktopOnly = styled(Box)(({ theme }) => ({
    display: "none",

    [theme.breakpoints.up("lg")]: {
        display: "block",
    },
}));
