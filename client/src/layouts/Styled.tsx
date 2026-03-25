import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";

export const LayoutBox = styled(Box)(({theme}) => ({
    position: 'relative',
    // paddingTop:'64px',
    backgroundColor: theme.palette.background.paper,
}))