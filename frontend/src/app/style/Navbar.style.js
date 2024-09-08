import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mobileNavbarHeight } from '@/lib/height.js';

export const NavBarBox = styled(Box)(({ isMobile }) => ({

    border: "2px solid red",
    width: "100%",
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#030712",
    paddingInline: `${isMobile ? "0.6rem" : "1.3rem"}`,
    "& .top_Box": {
        border: `${isMobile ? "2px solid blue" : "2px solid orange"}`,
        width: "100%",
        display: `${isMobile && "flex"}`,
        justifyContent: `${isMobile && "space-between"}`,
        paddingBlock: `${isMobile && "1rem"}`,
        paddingInline: `${isMobile && "1rem"}`,
    }


}));
export const NavBarBoxForMobile = styled(Box)(() => ({
    background: "hsl(0deg 0% 92.54%)",
    // backgroundColor: " hsla(156, 51%, 14%, 5%)",
    boxShadow: "inset 2px 0px 8px 2px hsl(0deg 3.16% 51.65%)",
    color: "#000",
    borderRadius: "6px",
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

