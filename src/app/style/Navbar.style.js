import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavBarBox = styled(Box)({
    // border: "2px solid",
    width: "100%",
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#030712",
    paddingInline: "1.3rem"

});

export const CustomList = styled("ul")({
    // border: "2px solid red",
    listStyle: "none",
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0.4rem",

});

export const ListItem = styled("li")(({ isActive }) => ({
    paddingBlock: "10px",
    paddingLeft: "10px",
    borderRadius: "9px",
    backgroundColor: isActive ? " rgba(238, 242, 255, 0.14)" : "none",
    color: isActive ? "#ffedd5" : "none",
    fontSize: "1.15em",
    fontWeight: 500,
    a: {
        display: "flex",
        alignItems: "center",
        columnGap: "1rem"
    },

}));
