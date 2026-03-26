import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

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

/* table */

export const TableCard = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(5),

    border:
        theme.palette.mode === "dark"
            ? `1px solid ${theme.palette.divider}`
            : "none",
}));

export const TableStyled = styled("table")({
    width: "100%",
    minWidth: 600, // важно для мобильных
    borderCollapse: "collapse",
});

export const TableScroll = styled(Box)(({ theme }) => ({
    width: "100%",
    overflowX: "auto",

    /* красивый скролл */
    WebkitOverflowScrolling: "touch",

    "&::-webkit-scrollbar": {
        height: 6,
    },

    "&::-webkit-scrollbar-thumb": {
        background: theme.palette.divider,
        borderRadius: 10,
    },
}));

export const HeadCell = styled("th")(({ theme }) => ({
    padding: theme.spacing(2),
    background: alpha(theme.palette.primary.main,0.08),
    textAlign: "left",
}));

export const Cell = styled("td")(({ theme }) => ({
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

/* cards */

export const GridTwo = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr 1fr"
    }
}));

export const Card = styled(Box)(({ theme }) => ({
    background: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(2),
}));

export const RequirementCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    textAlign: "center",
    boxShadow: theme.shadows[1],
}));

export const CardText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

export const ListRow = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(1),
}));

export const NumberCircle = styled(Box)(({ theme }) => ({
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: alpha(theme.palette.primary.main,0.15),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
}));

export const Bullet = styled(Box)(({ theme }) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: theme.palette.primary.main,
    marginTop: 8,
}));

export const Badge = styled(Box)(({ theme }) => ({
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: theme.shape.borderRadius,
    background: alpha(theme.palette.primary.main,0.12),
    color: theme.palette.primary.main,
    marginRight: 8,
    marginTop: 8,
    fontSize: 13,
}));


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