import { Box, styled } from "@mui/material";


export const TaskCardBox = styled(Box)(({ isMobile }) => ({
    border: "1.2px solid #fca5a5",
    display: " flex",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: `${isMobile ? "1rem" : "0px"}`,
    justifyContent: "space-between",
    padding: `${isMobile ? "0.6rem" : "1rem"}`,
    width: "100%",
    borderRadius: "0.4rem",
    marginInline: `${isMobile ? "0.7rem" : "1rem"}`,
    marginBottom: "1.4rem",
    "& .btnAction": {
        display: " flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // border: "2px solid orange",
        columnGap: `${isMobile ? "0.2rem" : "2rem"}`

    }
}))