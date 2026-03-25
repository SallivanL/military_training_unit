import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

/* Hero */

export const HeroSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(12, 2),
    textAlign: "center",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
}));

export const HeroSubtitle = styled(Typography)({
    maxWidth: 700,
    margin: "0 auto",
    opacity: 0.9,
});

/* Layout */

export const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    background: theme.palette.background.default,
}));

export const Container = styled(Box)({
    maxWidth: 1100,
    margin: "0 auto",
});

/* Cards */

export const ProgramsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
}));

export const ProgramCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
}));

export const ProgramTitle = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    fontWeight: 700,
    marginBottom: theme.spacing(1),
}));

export const ProgramDescription = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
}));

/* Info grid */

export const InfoGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

export const InfoItem = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1.5),
    alignItems: "flex-start",
    color: theme.palette.primary.main,
}));

export const InfoLabel = styled(Typography)(({ theme }) => ({
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: theme.palette.text.secondary,
}));

export const InfoValue = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    color: theme.palette.text.primary,
}));

/* Button */

export const ApplyButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: "10px 24px",
    textTransform: "none",
}));
