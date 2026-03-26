import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
/* Layout */

export const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    background: theme.palette.background.default,
}));

export const Container = styled(Box)({
    maxWidth: 1100,
    margin: "0 auto",
});

/* Headings */

export const SectionHeader = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(6),
}));

export const SectionTitle = styled(Typography)({
    fontWeight: 700,
});

/* Grids */

export const GridThree = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(6),

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
}));

export const GridTwo = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

/* Cards */

export const RequirementCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    textAlign: "center",
    boxShadow: theme.shadows[1],
}));

export const CardBlock = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
}));

export const DeadlineCard = styled(CardBlock)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

/* Elements */

export const IconWrapper = styled(Box)(({ theme }) => ({
    width: 56,
    height: 56,
    margin: "0 auto 16px",
    borderRadius: theme.shape.borderRadius,
    background: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1),
}));

export const CardText = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.secondary,
}));

export const ListItemRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
}));

export const ListNumber = styled(Box)(({ theme }) => ({
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 600,
}));

export const Bullet = styled(Box)(({ theme }) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    marginTop: 6,
    background: theme.palette.secondary.main,
}));


