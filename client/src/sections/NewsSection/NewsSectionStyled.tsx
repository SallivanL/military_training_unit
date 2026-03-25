import { styled } from "@mui/material/styles";
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

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
}));

export const CardItem = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
}));

export const DateRow = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
}));

export const Title = styled(Typography)({
    fontWeight: 600,
    marginBottom: 8,
});

export const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.secondary,
}));

export const MoreWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    gap: 4,
    fontWeight: 500,
    color: theme.palette.primary.main,
    cursor: "pointer",
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
