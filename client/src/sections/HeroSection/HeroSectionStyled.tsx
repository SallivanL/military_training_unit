import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";



export const HeroContainer = styled(Box)({
    position: "relative",
    // minHeight: "calc(100vh - 64px)",
    minHeight: "calc(100vh)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const BackgroundImage = styled("img")({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

export const BackgroundVideo = styled("video")({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

export const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    inset: 0,
    background: `linear-gradient(
    135deg,
    ${alpha(theme.palette.primary.main, 0.85)},
    ${alpha(theme.palette.secondary.main, 0.75)}
  )`,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: 900,
    padding: theme.spacing(0, 2),
    color: theme.palette.common.white,
}));

export const Badge = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 16px",
    borderRadius: 999,
    marginBottom: theme.spacing(3),
    backdropFilter: "blur(6px)",
    background: alpha(theme.palette.common.white, 0.1),
    border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
    fontSize: 14,
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey["200"]
            : theme.palette.primary.contrastText
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(3),
    lineHeight: 1.2,
    fontSize: "clamp(32px, 5vw, 56px)",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey["200"]
            : theme.palette.primary.contrastText

}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    opacity: 0.9,
    marginBottom: theme.spacing(4),
    fontSize: "clamp(16px, 2vw, 20px)",
    maxWidth: 700,
    marginInline: "auto",
    color:
        theme.palette.mode === "dark"
            ? alpha(theme.palette.grey["200"],0.8)
            : alpha(theme.palette.primary.contrastText,0.8)
}));

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "center",
    flexWrap: "wrap",
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: "12px 28px",
    fontSize: 16,
    textTransform: "none",
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey["200"]
            : theme.palette.primary.contrastText,
    background: theme.palette.secondary.light,

    "&:hover": {
        background: alpha(theme.palette.secondary.light, 0.6),
    },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: "12px 28px",
    fontSize: 16,
    textTransform: "none",
    borderColor: alpha(theme.palette.common.white, 0.6),
    color:
        theme.palette.mode === "dark"
            ? theme.palette.grey["200"]
            : theme.palette.primary.contrastText,
    backgroundColor: alpha(theme.palette.common.white, 0.4),

    "&:hover": {
        borderColor: theme.palette.common.white,
        background: alpha(theme.palette.common.white, 0.08),
    },
}));
