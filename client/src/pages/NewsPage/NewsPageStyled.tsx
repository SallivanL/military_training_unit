import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));

/* Hero */

export const HeroSection = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: "center",
    padding: theme.spacing(10, 2, 8),
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(28px, 4vw, 48px)",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
}));

export const HeroSubtitle = styled(Typography)({
    fontSize: 18,
    opacity: 0.85,
    maxWidth: 600,
    margin: "0 auto",
});

/* Content */

export const ContainerStyled = styled(Box)(({ theme }) => ({
    maxWidth: 1100,
    margin: "0 auto",
    padding: theme.spacing(6, 2),
}));

export const NewsGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr 1fr",
    },
}));

/* Card */

export const NewsCard = styled(Box)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    transition: "transform 0.2s ease, box-shadow 0.2s ease",

    "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.1)}`,
    },
}));

export const NewsDate = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    fontSize: 13,
    color: theme.palette.text.secondary,
}));

export const NewsTitle = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.primary,
}));

export const NewsText = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
}));