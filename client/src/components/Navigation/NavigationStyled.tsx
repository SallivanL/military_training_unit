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
    background: alpha(theme.palette.background.paper, 0.7),
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
    display: "none",
    textTransform: "none",
    borderRadius: theme.shape.borderRadius,
    padding: "6px 20px",
    fontWeight: 600,

    [theme.breakpoints.up("lg")]: {
        display: "inline-flex",
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
    width: 280,
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    background: theme.palette.background.paper,
}));

export const DrawerLink = styled(Button, {
    shouldForwardProp: (prop) => prop !== "active",
})<LinkProps>(({ theme, active }) => ({
    justifyContent: "flex-start",
    textTransform: "none",
    borderRadius: theme.shape.borderRadius,
    padding: "12px 14px",
    fontWeight: 500,

    color: active
        ? theme.palette.primary.main
        : alpha(theme.palette.text.primary, 0.7),

    background: active
        ? alpha(theme.palette.primary.main, 0.1)
        : "transparent",

    "&:hover": {
        background: theme.palette.action.hover,
    },
}));
