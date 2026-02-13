import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const LoaderWrapper = styled(Box)(({ theme }) => ({
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
}));

// Контейнер теперь подстраивается под ширину текста
export const LoaderContent = styled(Box)({
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "fit-content",
});

export const LoaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(24px, 4vw, 40px)",
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    whiteSpace: "nowrap", // чтобы ширина считалась по одной строке
}));

// Полоса теперь занимает 100% ширины контейнера (т.е. текста)
export const LoaderBar = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 4,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    background: alpha(theme.palette.primary.main, 0.15),
    position: "relative",
}));

export const LoaderProgress = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: "-40%",
    width: "60%",
    height: "100%",
    background: theme.palette.secondary.main,
}));
