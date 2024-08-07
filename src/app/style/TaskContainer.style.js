import { Box, styled } from "@mui/material";


export const TaskCon = styled(Box)(({ border, display }) => ({
    // border: border ? '1px solid #ccc' : 'none',
    display: display ? "flex" : "",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "2rem"

}))