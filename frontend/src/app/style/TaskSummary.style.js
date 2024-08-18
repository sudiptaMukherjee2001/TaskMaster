import { Box, styled } from "@mui/material";


export const TaskCardBox = styled(Box)(() => ({
    border: "1.2px solid #fca5a5",
    display: " flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    // width: "100%",
    borderRadius: "0.4rem",
    marginInline: "1rem",
    marginBottom: "1.4rem",
    "& .btnAction": {
        display: " flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // border: "2px solid orange",
        columnGap: "2rem"

    }
}))