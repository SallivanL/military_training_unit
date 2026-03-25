import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    background: theme.palette.background.default,
}));

export const Container = styled(Box)({
    maxWidth: 1200,
    margin: "0 auto",
});

export const Grid = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateColumns: "1fr",

    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },

    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
    },
}));

export const CardItem = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    textAlign: "center",
    boxShadow: theme.shadows[1],
    transition: "0.3s",

    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: theme.shadows[4],
    },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
    width: 56,
    height: 56,
    margin: "0 auto 16px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1),
}));

export const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.secondary,
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(6),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(1),
}));

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    maxWidth: 600,
    margin: "0 auto",
}));
