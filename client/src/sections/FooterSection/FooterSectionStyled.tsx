import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

/* Wrapper */

export const FooterWrapper = styled(Box)(({ theme }) => ({
    background:
        theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[800],
    color: theme.palette.common.white,
}));

export const Container = styled(Box)(({ theme }) => ({
    maxWidth: 1200,
    margin: "0 auto",
    padding: theme.spacing(8, 2),
}));

/* Grid */

export const Grid = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(6),

    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },

    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
    },
}));

export const Column = styled(Box)({
    display: "flex",
    flexDirection: "column",
});

/* Logo */

export const LogoRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
}));

export const LogoText = styled(Typography)({
    fontWeight: 700,
    fontSize: 20,
});

/* Text */

export const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: alpha(theme.palette.common.white, 0.7),
    lineHeight: 1.6,
}));

export const ColumnTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

/* Links */

export const NavLinkStyled = styled(Box)(({ theme }) => ({
    fontSize: 14,
    color: alpha(theme.palette.common.white, 0.7),
    textDecoration: "none",
    marginBottom: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
        color: theme.palette.common.white,
    },
}));

/* Contacts */

export const ContactRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    fontSize: 14,
    color: alpha(theme.palette.common.white, 0.7),
    marginBottom: theme.spacing(1.5),
}));

/* Bottom */

export const BottomBar = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(3),
    borderTop: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
    textAlign: "center",
    fontSize: 12,
    color: alpha(theme.palette.common.white, 0.5),
}));

