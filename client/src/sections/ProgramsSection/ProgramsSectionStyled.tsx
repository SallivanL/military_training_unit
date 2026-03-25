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

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
}));

export const CardItem = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
    width: 48,
    height: 48,
    borderRadius: theme.shape.borderRadius,
    background: alpha(theme.palette.secondary.main, 0.1),
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const Title = styled(Typography)({
    fontWeight: 600,
});

export const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.secondary,
    flex: 1,
}));

export const MoreLink = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 14,
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
