import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mobileNavbarHeight } from '@/lib/height.js';

export const NavBarBoxForLargeScreen = styled(Box)(({ theme }) => ({

    border: "2px solid pink",
    width: "100%",
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#030712",
    paddingInline: "1.3rem",
    //hide large screen navbar in mobile
    [theme.breakpoints.down('sm')]: {
        display: "none",
    },
    "& .top_Box": {
        border: "2px solid orange",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: "1rem",
        paddingInline: "1rem",
    }



}));
export const NavBarBoxForMobile = styled(Box)(({ theme }) => ({
    background: "hsl(0deg 0% 100%)",
    // backgroundColor: " hsla(156, 51%, 14%, 5%)",
    color: "#000",
    // border: "2px solid pink",
    // borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "1.3rem",
    position: "fixed",
    left: "0px",
    right: "0px",
    bottom: "0px",
    margin: "auto",
    zIndex: "2",
    width: "100%",
    //hide small screen navbar in large screen

    [theme.breakpoints.up('sm')]: {
        display: "none",
    },
    height: mobileNavbarHeight,
    "& .icon": {
        fontSize: "2.2rem",
    }



}));

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

